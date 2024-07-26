// script.js
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".carousel-wrapper");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function updateCarousel() {
    wrapper.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 3;
    updateCarousel();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex < items.length - 3 ? currentIndex + 1 : 0;
    updateCarousel();
  });
});
