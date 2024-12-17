const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 0;

// Crear puntos guía
slideElements.forEach((_, index) => {
  const indicator = document.createElement("div");
  indicator.addEventListener("click", () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});
updateIndicators();

// Función para navegar a un slide específico
function goToSlide(index) {
  currentIndex = index;
  updateSlider();
  updateIndicators();
}

// Función para actualizar el slider
function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función para actualizar los puntos guía
function updateIndicators() {
  document.querySelectorAll(".indicators div").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

// Navegación con botones
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slideElements.length - 1;
  updateSlider();
  updateIndicators();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < slideElements.length - 1 ? currentIndex + 1 : 0;
  updateSlider();
  updateIndicators();
});
