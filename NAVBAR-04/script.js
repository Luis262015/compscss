// Seleccionar elementos
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Alternar clases para abrir/cerrar menú
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("active");
});
