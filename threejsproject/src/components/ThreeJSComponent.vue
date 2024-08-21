<template>
  <div ref="threejsContainer" class="threejs-container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";

const threejsContainer = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    threejsContainer.value.clientWidth / threejsContainer.value.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(threejsContainer.value.clientWidth, threejsContainer.value.clientHeight);
  threejsContainer.value.appendChild(renderer.domElement);

  // Añadir luz
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
});
</script>

<style scoped>
.threejs-container {
  /* width: 100%; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
</style>
