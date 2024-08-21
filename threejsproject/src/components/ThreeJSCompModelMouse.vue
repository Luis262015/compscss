<template>
  <div ref="threejsContainer" class="threejs-container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Referencia al contenedor
const threejsContainer = ref(null);

onMounted(() => {
  // Crear escena, cámara y renderizador
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

  const light2 = new THREE.DirectionalLight(0xffffff, 2);
  light2.position.set(10, 15, 15).normalize();
  scene.add(light);

  // Añadir controles de órbita
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Activa el amortiguamiento (inercia)
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI / 2;

  // Cargar el modelo GLTF
  const loader = new GLTFLoader();
  loader.load(
    // '/path/to/your/model.gltf',
    "../../public/assets/3d/CHAPA.glb",
    (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Ajustar escala y posición del modelo
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 0);

      // Animar el modelo si es necesario
      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01; // Rotación del modelo
        controls.update(); // Actualiza los controles de órbita
        renderer.render(scene, camera);
      };

      // animate();
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );

  // Animar la escena
  const animate = () => {
    requestAnimationFrame(animate);
    controls.update(); // Actualiza los controles de órbita
    renderer.render(scene, camera);
  };

  animate();
});
</script>

<style scoped>
.threejs-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
</style>
