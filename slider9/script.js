// Variables principales
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".btn.prev");
const nextButton = document.querySelector(".btn.next");

let currentIndex = 0;
const totalSlides = slides.length;

// Función para actualizar el slider
function updateSlider(index) {
  currentIndex = index;
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botón "Anterior"
prevButton.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider(newIndex);
});

// Botón "Siguiente"
nextButton.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % totalSlides;
  updateSlider(newIndex);
});
