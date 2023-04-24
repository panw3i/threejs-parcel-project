import * as THREE from 'three';
import { gsap } from 'gsap';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建立方体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


let isAnimationPlaying = false; // 是否正在播放动画
// 为单击事件添加事件监听器
window.addEventListener('click', () => {
  if (isAnimationPlaying) {
    // 停止动画
    timeline.pause();
  } else {
    // 开始动画
    timeline.play();
  }
  isAnimationPlaying = !isAnimationPlaying;
});
const timeline = gsap.timeline({ paused: true }); // 创建一个暂停的时间轴

// 使用GSAP创建立方体旋转动画
const initialRotationY = cube.rotation.y;
timeline.to(cube.rotation, {
  duration: 2,
  y: initialRotationY + Math.PI * 2,
  ease: 'line',
  yoyo: true, // 循环
  repeat: -1, // 无限循环
});

// 动画循环
function animate() {
  requestAnimationFrame(animate);

  // 渲染场景
  renderer.render(scene, camera);
}

// 启动动画循环
animate();
