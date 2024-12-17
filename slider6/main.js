const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".btn.prev");
const nextButton = document.querySelector(".btn.next");
const navigationDots = document.querySelector(".navigation-dots");

let currentIndex = 0;
let autoSlideInterval;

// Crear puntos de navegación
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    navigationDots.appendChild(dot);
  });
}

// Actualizar el punto activo
function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Ir a una diapositiva específica
function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateDots();
}

// Ir a la siguiente diapositiva
function nextSlide() {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  goToSlide(currentIndex);
}

// Ir a la diapositiva anterior
function prevSlide() {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  goToSlide(currentIndex);
}

// Configurar desplazamiento automático
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

// Detener el desplazamiento automático
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Eventos para los botones
nextButton.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevButton.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

// Iniciar automáticamente
createDots();
startAutoSlide();
