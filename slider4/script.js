// Variables principales
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".btn.prev");
const nextButton = document.querySelector(".btn.next");
const indicators = document.querySelectorAll(".indicators span");

let currentIndex = 0; // Índice actual
const totalSlides = slides.length;

// Función para actualizar el slider
function updateSlider(index) {
  currentIndex = index;
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualizar indicadores
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === currentIndex);
  });
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

// Click en indicadores
indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index);
    updateSlider(index);
  });
});

// Autoplay
let autoplay = setInterval(() => {
  const newIndex = (currentIndex + 1) % totalSlides;
  updateSlider(newIndex);
}, 3000);

// Pausar autoplay al interactuar
document.querySelector(".slider").addEventListener("mouseenter", () => {
  clearInterval(autoplay);
});

document.querySelector(".slider").addEventListener("mouseleave", () => {
  autoplay = setInterval(() => {
    const newIndex = (currentIndex + 1) % totalSlides;
    updateSlider(newIndex);
  }, 3000);
});
