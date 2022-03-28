import * as THREE from 'three';
import { Controller } from './Controller.ts';
export class Scenario extends Controller {
	start() {
		console.group('Setup scenario');
		this.setCameraPosition(new THREE.Vector3(0, 0, -6));
		this.setCameraFocusOnVector3(new THREE.Vector3(0, 0, 0));
		this.addGltf('gltf/pizza-low-res.gltf');
		console.groupEnd();

		this.startAnimationLoop();
	}
}
