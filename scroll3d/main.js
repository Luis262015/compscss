let air_pods_model = document.querySelector(".air_pods_model");
let beats_model = document.querySelector(".beats_model");
let apple_watch_model = document.querySelector(".apple_watch_model");

function model(
  set_model_directory,
  model_local_directory,
  perspectiveCamera,
  camera_y,
  a_light,
  a_light_op,
  p_light,
  p_light_op
) {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    perspectiveCamera,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 40;
  camera.position.y = camera_y;
  let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setClearColor(0xf0d98e, 1);
  renderer.setSize(1920, 720);
  renderer.domElement.setAttribute("id", "Model");
  set_model_directory.appendChild(renderer.domElement, document.body.firstChild);

  const aLight = new THREE.AmbientLight(a_light, a_light_op);
  aLight.position.set(10, 7, 7);
  scene.add(aLight);
  const pLight = new THREE.PointLight(p_light, p_light_op);
  pLight.position.set(10, 50, 70);
  scene.add(pLight);

  let loader = new THREE.GLTFLoader();
  let obj = null;

  loader.load(model_local_directory, function (gltf) {
    obj = gltf;
    obj.scene.scale.set(1, 1.3, 1);
    scene.add(obj.scene);
  });

  function animate(e) {
    requestAnimationFrame(animate);
    if (obj) {
      obj.scene.rotation.x = 0;
      $(window).scroll(function () {
        obj.scene.rotation.y = -window.scrollY / 1000 - 100;
      });

      renderer.render(scene, camera);
    }
  }

  animate();
}

// Your Models, Your Settings

// model(air_pods_model, "scene.gltf", 40, 0, 0x333333, 1, 0xffffff, 1);
// model(beats_model, "scene.gltf", 65, 25, 0x5555ff, 10, 0xffffff, 10);
// model(apple_watch_model, "scene.gltf", 0.2, 0, 0x00ffff, 10, 0xffffff, 1);
model(air_pods_model, "3d/CHAPA.glb", 40, 0, 0x333333, 1, 0xffffff, 1);
model(beats_model, "3d/CHAPA.glb", 65, 25, 0x5555ff, 10, 0xffffff, 10);
model(apple_watch_model, "3d/CHAPA.glb", 0.2, 0, 0x00ffff, 10, 0xffffff, 1);
