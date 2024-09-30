// Seleccionar los elementos
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");

const openModalBtnX = document.getElementById("open-modal-btn-x");
const closeModalBtnX = document.getElementById("close-modal-btn-x");
const modalX = document.getElementById("modalX");

// Abrir el modal
openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex"; // Mostrar el modal
});

// Cerrar el modal cuando se hace clic en la 'X'
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Ocultar el modals
});
// Abrir el modal
openModalBtnX.addEventListener("click", function () {
  modalX.style.display = "flex"; // Mostrar el modal
});

// Cerrar el modal cuando se hace clic en la 'X'
closeModalBtnX.addEventListener("click", function () {
  modalX.style.display = "none"; // Ocultar el modals
});

// Cerrar el modal si se hace clic fuera del contenido
// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none"; // Ocultar el modal
//   }
// });
