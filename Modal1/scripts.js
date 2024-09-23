// Seleccionar los elementos
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");

// Abrir el modal
openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex"; // Mostrar el modal
});

// Cerrar el modal cuando se hace clic en la 'X'
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal si se hace clic fuera del contenido
// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none"; // Ocultar el modal
//   }
// });
