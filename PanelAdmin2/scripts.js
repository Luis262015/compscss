// Seleccionar los elementos
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

// Evento para abrir el sidebar con el botón de hamburguesa
menuToggle.addEventListener("click", function () {
  sidebar.classList.add("active"); // Agregar la clase 'active' para mostrar el sidebar
});

// Evento para cerrar el sidebar con el botón de cierre
closeSidebar.addEventListener("click", function () {
  sidebar.classList.remove("active"); // Quitar la clase 'active' para ocultar el sidebar
});
