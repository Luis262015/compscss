// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const projectCount = document.getElementById("projectCount");
//   const workCount = document.getElementById("workCount");

//   const updateCount = (element, target) => {
//     let count = 0;
//     const interval = setInterval(() => {
//       if (count < target) {
//         count++;
//         element.textContent = count;
//       } else {
//         clearInterval(interval);
//       }
//     }, 50); // Ajusta la velocidad del contador
//   };

//   // Llama a la función con los valores que desees
//   updateCount(projectCount, 150); // Cambia 150 por el número de proyectos
//   updateCount(workCount, 300); // Cambia 300 por el número de trabajos
// });

// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const projectCount = document.getElementById("projectCount");
//   const workCount = document.getElementById("workCount");

//   const updateCount = (element, target, duration) => {
//     let count = 0;
//     const incrementTime = duration / target; // Tiempo para alcanzar cada incremento
//     const interval = setInterval(() => {
//       if (count < target) {
//         count++;
//         element.textContent = count;
//       } else {
//         clearInterval(interval);
//       }
//     }, incrementTime);
//   };

//   // Duración total en milisegundos
//   const duration = 1000; // 3000 ms = 3 segundos
//   updateCount(projectCount, 150, duration); // Cambia 150 por el número de proyectos
//   updateCount(workCount, 300, duration); // Cambia 300 por el número de trabajos
// });

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const projectCount = document.getElementById("projectCount");
  const workCount = document.getElementById("workCount");

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const updateCount = (element, target, duration) => {
    let count = 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1); // Normaliza el tiempo entre 0 y 1
      const easedT = easeInOutQuad(t); // Aplica la función de easing

      // Actualiza el conteo basado en el easing
      count = Math.floor(easedT * target);
      element.textContent = count;

      if (t < 1) {
        requestAnimationFrame(step); // Continúa la animación
      }
    };

    requestAnimationFrame(step); // Inicia la animación
  };

  const duration = 3000; // Duración total en milisegundos
  updateCount(projectCount, 150, duration); // Cambia 150 por el número de proyectos
  updateCount(workCount, 300, duration); // Cambia 300 por el número de trabajos
});
