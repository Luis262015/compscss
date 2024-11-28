const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentIndex = 0;
const intervalTime = 3000; // Tiempo en milisegundos para la reproducción automática
let slideInterval;

// Función para mostrar el slide actual
function showSlide(index) {
  if (index >= slide.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slide.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Función para avanzar al siguiente slide
function nextSlide() {
  showSlide(currentIndex + 1);
}

// Función para reiniciar la reproducción automática
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Event listeners para los botones
nextButton.addEventListener("click", () => {
  nextSlide();
  resetInterval(); // Reinicia el intervalo al hacer clic
});

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
  resetInterval(); // Reinicia el intervalo al hacer clic
});

// Inicia mostrando el primer slide
showSlide(currentIndex);

// Configura la reproducción automática
slideInterval = setInterval(nextSlide, intervalTime);
