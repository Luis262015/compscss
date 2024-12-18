// Seleccionar elementos
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const submenuContainer = document.querySelector(".submenu-container");

// Alternar clases para abrir/cerrar menú principal
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("active");
});

// Alternar submenú en pantallas pequeñas
submenuContainer.addEventListener("click", (e) => {
  // Evitar comportamiento por defecto del enlace
  e.preventDefault();
  submenuContainer.classList.toggle("active");
});
