<template>
  <canvas class="webgl"></canvas>
</template>

<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { onMounted } from "vue";

onMounted(() => {
  // Debug
  const gui = new dat.GUI();

  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();

  // Objects
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

  // Particulas
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCnt = 5000;
  const posArray = new Float32Array(particlesCnt * 3);

  for (let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = Math.random();
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

  // OPCION 1
  // // Materials
  // const material = new THREE.MeshBasicMaterial();
  // material.color = new THREE.Color(0xff0000);

  // // Mesh
  // const sphere = new THREE.Mesh(geometry, material);
  // scene.add(sphere);
  /////////////////////////////////////

  // OPCION 2
  // Materials
  const material = new THREE.PointsMaterial({
    size: 0.005,
  });

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.002,
    transparent: true,
    // color: "blue",
    // blending: THREE.AdditiveBlending,
  });

  // Mesh
  const sphere = new THREE.Points(geometry, material);
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(sphere, particlesMesh);
  ///////////////////////////

  // Lights
  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);

  /**
   * Sizes
   */

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color("#21282a"), 1);

  document.addEventListener("mousemove", animateParticles);

  const clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    sphere.rotation.y = 0.5 * elapsedTime;

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();
});
</script>

<style scoped>
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>
