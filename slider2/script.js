// Seleccionar elementos
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 0;
const totalSlides = slides.length;

// Crear indicadores
slides.forEach((_, index) => {
  const indicator = document.createElement("div");
  if (index === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

// Función para mover al slide especificado
function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Actualizar el slider
function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll(".indicators div").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

// Botones de navegación
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

// Autoplay
let autoplay = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 5000);

// Pausar autoplay al interactuar
document.querySelector(".slider").addEventListener("mouseenter", () => {
  clearInterval(autoplay);
});

document.querySelector(".slider").addEventListener("mouseleave", () => {
  autoplay = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 3000);
});
