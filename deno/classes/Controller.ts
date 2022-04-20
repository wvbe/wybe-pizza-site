import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Event } from './Event.ts';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
type ThreeControllerOptions = {
	fieldOfView: number;
	pixelRatio: number;
	enableAutoRotate: boolean;
	enablePan: boolean;
	enableZoom: boolean;
	restrictCameraAngle: boolean;
};

// This global mapping helps reduce the amount of new WebGLRenderer that need to be created. If
// created too many, the oldest renderer will be cleaned up at some point -- which is probably the
// main renderer, and the screen goes blank.
const RENDERER_BY_ELEMENT = new WeakMap<HTMLElement, THREE.WebGLRenderer | null>();

const DRACO_LOADER = new DRACOLoader(new THREE.LoadingManager()).setDecoderPath(
	`https://unpkg.com/three@0.${THREE.REVISION}.x/examples/js/libs/draco/gltf/`
);
export class Controller {
	public animating = false;

	public scene: THREE.Scene;
	public renderer: THREE.WebGLRenderer;
	public camera: THREE.Camera;
	public controls: OrbitControls;
	public raycaster: THREE.Raycaster;
	public clock: THREE.Clock;

	/**
	 * The element into which the ThreeJS canvas as well as any overlay elements are placed
	 */
	public root: HTMLElement;

	/**
	 * The controller starts controlling the Three canvas. The opposite of $detach.
	 * @deprecated
	 */
	public readonly $start = new Event('ThreeController#start');

	/**
	 * The controller stops controlling the canvas, animation stops. The opposite of $start.
	 */
	public readonly $detach = new Event('ThreeController#$detach');

	public readonly $destruct = new Event('ThreeController#$destruct');

	/**
	 * The event that a render happens, and the canvas/game state needs an update.
	 *
	 * This event fires probably 60 times per second while the controller is started.
	 */
	public readonly $update = new Event();

	/**
	 * The event that the viewport is resized
	 */
	public readonly $resize = new Event();

	/**
	 * The event that the ThreeJS canvas was clicked, but it was not on an entity or tile.
	 */
	public readonly $click = new Event<[MouseEvent]>('ThreeController#$click');

	/**
	 * The event that the camera moves, or as ThreeJS puts it:
	 *   "Fires when the camera has been transformed by the controls.""
	 */
	public readonly $camera = new Event();

	public constructor(root: HTMLElement, options: ThreeControllerOptions) {
		this.$destruct.once(() => {
			if (this.animating) {
				this.stopAnimationLoop();
			}
		});
		// @TODO remove these event listeners from the place where they are set.
		this.$detach.once(() => {
			this.$camera.clear();
			this.$click.clear();
		});

		this.root = root;

		this.clock = new THREE.Clock();

		// https://threejs.org/docs/#api/en/scenes/Scene
		this.scene = new THREE.Scene();

		// https://threejs.org/docs/#api/en/renderers/WebGLRenderer
		this.renderer =
			RENDERER_BY_ELEMENT.get(root) ||
			new THREE.WebGLRenderer({
				antialias: true,
				alpha: true
			});
		RENDERER_BY_ELEMENT.set(root, this.renderer);
		this.$destruct.once(() => this.renderer.dispose.bind(this.renderer));

		// Set the camera;
		//   https://threejs.org/docs/#api/en/cameras/OrthographicCamera
		//   https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
		const { aspect } = this.getViewportSize();
		this.camera = new THREE.PerspectiveCamera(options.fieldOfView, aspect, 0.1, 1000);
		this.$destruct.once(
			this.$resize.on(() => {
				const { aspect, width, height } = this.getViewportSize();
				const camera = this.camera as THREE.PerspectiveCamera;
				camera.aspect = aspect;
				camera.updateProjectionMatrix();
				this.renderer.setSize(
					width * options.pixelRatio,
					height * options.pixelRatio,
					false
				);
			})
		);
		this.$resize.emit();
		this.renderer.domElement.style.width = '100%';
		this.renderer.domElement.style.height = '100%';

		// https://threejs.org/docs/#examples/en/controls/OrbitControls
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		if (options.restrictCameraAngle) {
			this.controls.maxPolarAngle = 0.45 * Math.PI;
		}
		this.controls.screenSpacePanning = false;
		this.controls.enableZoom = options.enableZoom;
		this.controls.enableDamping = true;
		this.controls.enablePan = options.enablePan;
		this.controls.dampingFactor = 0.1;
		this.controls.autoRotate = options.enableAutoRotate;
		this.$destruct.once(this.controls.dispose.bind(this.controls));

		// https://threejs.org/docs/#api/en/core/Raycaster
		// @TODO maybe can be global?
		this.raycaster = new THREE.Raycaster();

		// Mount the goddamn thing
		root.appendChild(this.renderer.domElement);
		this.$destruct.once(() => root.removeChild(this.renderer.domElement));

		const handleResize = this.$resize.emit.bind(this.$resize);
		globalThis.addEventListener('resize', handleResize);
		this.$destruct.once(() => globalThis.removeEventListener('resize', handleResize));

		const handleCameraChange = this.$camera.emit.bind(this.$camera);
		this.controls.addEventListener('change', handleCameraChange);
		this.$destruct.once(() => this.controls.removeEventListener('change', handleCameraChange));

		const handleClick = this.$click.emit.bind(this.$click);
		this.root.addEventListener('click', handleClick);
		this.$destruct.once(() => this.root.removeEventListener('click', handleClick));
	}

	/**
	 * Do the opposite of constructing a ThreeController
	 */
	public destructor() {
		this.$destruct.emit();
	}
	/**
	 * Show a 3D cross-hair in red, blue and green, correlating to X, Y and Z
	 */
	public addAxisHelper(v: THREE.Vector3 = new THREE.Vector3(0, 0, 0), size = 1) {
		const axesHelper = new THREE.AxesHelper(size);
		axesHelper.position.set(v.x, v.y, v.z);
		this.scene.add(axesHelper);
	}
	/**
	 * Position the camera at a game coordinate
	 */
	public setCameraPosition(position: THREE.Vector3) {
		this.camera.position.copy(position);
	}

	/**
	 * Point the camera right at a ThreeJS coordinate
	 */
	protected setCameraFocusOnVector3(vector: THREE.Vector3) {
		this.camera.lookAt(vector);
		this.controls.target = vector;
	}

	/**
	 * Point the camera right at a ThreeJS mesh
	 */
	public setCameraFocusMesh(mesh: THREE.Mesh) {
		const geometry = mesh.geometry;
		const center = new THREE.Vector3();
		geometry.computeBoundingBox();
		geometry.boundingBox?.getCenter(center);
		mesh.localToWorld(center);

		this.setCameraFocusOnVector3(center);
	}

	private getViewportSize() {
		const boundingClientRect = this.root.getBoundingClientRect();
		return {
			width: boundingClientRect.width,
			height: boundingClientRect.height,
			aspect: boundingClientRect.width / boundingClientRect.height
		};
	}
	/**
	 * Start the animation loop
	 */
	public startAnimationLoop() {
		if (this.animating) {
			throw new Error('Animation already started');
		}

		const animate = () => {
			if (!this.animating) {
				return;
			}
			globalThis.requestAnimationFrame(animate);
			this.renderAnimationFrame();
		};

		this.animating = true;

		animate();
	}

	addGltf(path: string): Promise<GLTF> {
		// Instantiate a loader
		const loader = new GLTFLoader().setDRACOLoader(DRACO_LOADER);
		// loader.setPath(path);
		// Load a glTF resource
		return new Promise((resolve, reject) =>
			loader.load(
				// resource URL
				path,
				// called when the resource is loaded
				gltf => {
					this.scene.add(gltf.scene);

					gltf.scene.scale.set(2, 2, 2);
					gltf.scene.position.x = 0; //Position (x = right+ left-)
					gltf.scene.position.y = 0; //Position (y = up+, down-)
					gltf.scene.position.z = 0; //Position (z = front +, back-)

					// gltf.animations; // Array<THREE.AnimationClip>
					// gltf.scene; // THREE.Group
					// gltf.scenes; // Array<THREE.Group>
					// gltf.cameras; // Array<THREE.Camera>
					// gltf.asset; // Object
					resolve(gltf);
				},
				xhr => {
					console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
				},
				reject
			)
		);
	}

	/**
	 * Call for all objects etc. to be updated, and render once.
	 */
	private renderAnimationFrame() {
		this.$update.emit();
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	}

	/**
	 * Stop the animation loop, the opposite of startAnimationLoop(). Will also fire the opposite event.
	 */
	public stopAnimationLoop() {
		if (!this.animating) {
			// @TODO maybe just return early.
			throw new Error('Animation not started');
		}
		this.animating = false;
	}
}
