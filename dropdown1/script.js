document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.getElementById("dropdown-btn");
  const dropdownContent = document.getElementById("dropdown-content");

  // Función para mostrar/ocultar el dropdown
  dropdownBtn.addEventListener("click", function (event) {
    dropdownContent.classList.toggle("show");
    event.stopPropagation(); // Evita que el clic se propague
  });

  // Cerrar el dropdown si el usuario hace clic fuera de él
  document.addEventListener("click", function (event) {
    if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });
});
