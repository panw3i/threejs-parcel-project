import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { AxesHelper } from 'three';
const axesHelper = new AxesHelper(5);
const clock = new THREE.Clock();

// Create a scene
const scene = new THREE.Scene();

// Add a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

// Add a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(axesHelper);

// Render loop
function animate() {
  // 在下一帧时调用animate函数
  requestAnimationFrame(animate);

  // 获取时间差
  const deltaTime = clock.getDelta();

  // 使用时间差来移动立方体
  cube.position.x += 1 * deltaTime;

  // 更新控制器和渲染场景
  controls.update();
  renderer.render(scene, camera);
}


animate();
