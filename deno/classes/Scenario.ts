import * as THREE from 'three';
import { Controller } from './Controller.ts';
import { Event } from './Event.ts';
const PREFER_DARK_MODE =
	window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export class Scenario extends Controller {
	start() {
		console.group('Setup scenario');
		this.setCameraPosition(new THREE.Vector3(0, 0, -6));
		this.setCameraFocusOnVector3(new THREE.Vector3(0, 0, 0));
		this.setLightMode(this.darkMode);
		this.startLowRes();
		this.startAnimationLoop();
		console.groupEnd();
	}

	darkMode = PREFER_DARK_MODE;

	$light = new Event();

	setLightMode(nightlight: boolean) {
		this.darkMode = nightlight;
		globalThis.document.body.setAttribute('class', this.darkMode ? 'nightlight' : 'daylight');
		this.$light.emit();
	}

	toggleLightMode() {
		this.setLightMode(!this.darkMode);
	}

	async startLowRes() {
		// 'style', `background-color: ${this.darkMode ? `#000000` : `#ffffff`}`;
		const ambient = new THREE.AmbientLight(0xffffff, 0.3);
		this.scene.add(ambient);

		const directional1 = new THREE.DirectionalLight(0xffffff, 0.8);
		directional1.position.set(1, 1, 1).normalize();
		this.scene.add(directional1);

		const directional2 = new THREE.DirectionalLight(0xffffff, 0.7);
		directional2.position.set(-1, 1, -1).normalize();
		this.scene.add(directional2);

		const gltf = await this.addGltf('gltf/pizza-low-res.gltf');

		const applyMaterialToMesh = () => {
			const material = new THREE.MeshPhongMaterial({
				color: this.darkMode ? 0xcccccc : 0x333333,
				wireframe: false
			});
			gltf.scene.traverse(o => {
				if (o instanceof THREE.Mesh) {
					o.material = material;
				}
			});
		};

		applyMaterialToMesh();

		this.$detach.on(this.$light.on(applyMaterialToMesh));
	}
	startHighRes() {
		const ambient = new THREE.AmbientLight(0xffffff, 0.8);
		this.scene.add(ambient);

		const directional1 = new THREE.DirectionalLight(0xffffff, 1.4);
		directional1.position.set(0.3, 0, -1).normalize();
		this.scene.add(directional1);

		const directional2 = new THREE.DirectionalLight(0xffffff, 1.4);
		directional2.position.set(-0.3, 0, -1).normalize();
		this.scene.add(directional2);

		this.addGltf('gltf/pizza-hi-res.gltf');
	}
}
