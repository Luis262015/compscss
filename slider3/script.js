// Selección de elementos
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicators span");

let currentIndex = 0; // Índice actual
const totalSlides = slides.length;

// Función para actualizar el slider
function updateSlider(index) {
  currentIndex = index;
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualizar indicadores
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === currentIndex);
  });
}

// Botón Anterior
prevButton.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider(newIndex);
});

// Botón Siguiente
nextButton.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % totalSlides;
  updateSlider(newIndex);
});

// Indicadores
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    updateSlider(i);
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
