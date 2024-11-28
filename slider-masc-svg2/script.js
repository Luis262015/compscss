// Seleccionar el círculo dentro de la máscara y los elementos del slider
const maskCircle = document.getElementById("mask-circle");
const sliderContent = document.querySelector(".slider-content");
let currentIndex = 0;

// Configuración del slider
const slideCount = 3; // Número de slides
const sliderWidth = 100; // Ancho en porcentaje
const animationDuration = 1000; // Duración en milisegundos

// Función para mover el slider
const moveSlider = (index) => {
  sliderContent.style.transform = `translateX(-${index * sliderWidth}vw)`;

  // Reiniciar la animación del círculo de la máscara
  maskCircle.setAttribute("r", 0);
  setTimeout(() => {
    maskCircle.setAttribute("r", 50); // Expande el círculo al tamaño completo
  }, 50);
};

// Función para cambiar el slide automáticamente
const autoSlide = () => {
  currentIndex = (currentIndex + 1) % slideCount; // Ir al siguiente slide
  moveSlider(currentIndex);
};

// Iniciar el slider automáticamente
setInterval(autoSlide, animationDuration + 5000); // Añadir pausa entre animaciones
