// Configuración de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // Campo de visión
  window.innerWidth / window.innerHeight, // Relación de aspecto
  0.1, // Distancia mínima visible
  1000 // Distancia máxima visible
);

// Renderizador
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Geometría y material del objeto
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Luz
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Cámara
camera.position.z = 5;

// Animación controlada por scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Posición de desplazamiento vertical
  const maxScroll = document.body.scrollHeight - window.innerHeight; // Altura total del scroll
  const scrollFraction = scrollY / maxScroll; // Porcentaje del scroll (0 a 1)

  // Actualizamos la rotación del cubo en función del porcentaje
  cube.rotation.x = scrollFraction * Math.PI * 4; // Rota 4 vueltas completas en X
  cube.rotation.y = scrollFraction * Math.PI * 4; // Rota 4 vueltas completas en Y
});

// Loop de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Ajustar el canvas al redimensionar la ventana
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
