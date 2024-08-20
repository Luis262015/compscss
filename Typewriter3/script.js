// script.js
const text = "Este es un efecto typewriter con fondo de imagen."; // Cambia este texto
const typewriterText = document.getElementById("typewriter-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typewriterText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Ajusta la velocidad de la animación
  }
}

typeWriter();
document.addEventListener("DOMContentLoaded", function () {});
