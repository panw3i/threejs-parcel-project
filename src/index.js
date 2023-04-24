import * as THREE from 'three';
import dat from 'dat.gui';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const gui = new dat.GUI();

const params = {
  speed: 0.01
};

gui
    .add(params, 'speed', 0, 0.1)
    .max(0.1)
    .min(0)
    .onChange((value) => {
        params.speed = value;
    });

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += params.speed;
  cube.rotation.y += params.speed;

  renderer.render(scene, camera);
}

animate();
