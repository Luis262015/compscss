// script.js
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

// Mostrar el primer slide al cargar la página
document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));

// Manejar el formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensaje enviado con éxito. ¡Gracias!");
  this.reset();
});
