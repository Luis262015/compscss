// Configuración básica de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // Campo de visión
  window.innerWidth / window.innerHeight, // Relación de aspecto
  0.1, // Distancia mínima visible
  1000 // Distancia máxima visible
);

// Renderizador
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
renderer.setSize(window.innerWidth * 0.5, window.innerHeight); // Ajusta el tamaño del canvas
renderer.setPixelRatio(window.devicePixelRatio); // Mejora la calidad en pantallas retina

// Geometría y material del objeto (ejemplo: un cubo)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Luz
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Cámara
camera.position.z = 5;

// Animación de rotación
function animate() {
  requestAnimationFrame(animate);

  // Rotar el cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// Ajustar el tamaño del canvas al redimensionar la ventana
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth * 0.5, window.innerHeight);
});
