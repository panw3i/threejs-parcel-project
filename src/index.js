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
  rotationSpeed: 0.01,
  color: '#00ff00',
  value: 50,
  background: '#ffffff',
  value1: 0.5,
  range: [0, 100],
  select: 'Option 1',
  choice: 'Option 1',
  showGrid: true
};

gui.add(params, 'rotationSpeed', 0, 0.1);
gui.addColor(params, 'color').onChange(function() {
  cube.material.color.set(params.color);
});

gui.add(params, 'value', 0, 100);
gui.addColor(params, 'background');

gui.add(params, 'value1', 0, 1);

gui.add(params, 'range').min(0).max(100).step(1);

gui.add(params, 'select', ['Option 1', 'Option 2', 'Option 3']);

gui.add(params, 'choice', ['Option 1', 'Option 2', 'Option 3']);

gui.add(params, 'showGrid');

const folder1 = gui.addFolder('文件夹 1');

folder1.add(params, 'value', 0, 100);

folder1.add(params, 'range').min(0).max(100).step(1);

folder1.add(params, 'select', ['Option 1', 'Option 2', 'Option 3']);

folder1.add(params, 'choice', ['Option 1', 'Option 2', 'Option 3']);

folder1.add(params, 'showGrid');

const folder2 = gui.addFolder('文件夹 2');

folder2.add(params, 'value1', 0, 1);

folder2.add(params, 'range').min(0).max(100).step(1);

folder2.add(params, 'select', ['Option 1', 'Option 2', 'Option 3']);

folder2.add(params, 'choice', ['Option 1', 'Option 2', 'Option 3']);

folder2.add(params, 'showGrid');

const button = { action: function() { console.log('按钮被点击'); } };
gui.add(button, 'action').name('点击这个按钮');

const rendererParams = {  clearColor: '#000000',
  render: function() { console.log('自定义渲染器执行'); }
};

gui.addColor(rendererParams, 'clearColor').onChange(function() {
  console.log('背景色变更为：' + rendererParams.clearColor);
  renderer.setClearColor(rendererParams.clearColor);
});

gui.add(rendererParams, 'render').name('执行自定义渲染器');

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += params.rotationSpeed;
  cube.rotation.y += params.rotationSpeed;

  renderer.render(scene, camera);
}

animate();

