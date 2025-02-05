// script.js
document.addEventListener("DOMContentLoaded", function () {
  const bentoItems = document.querySelectorAll(".bento-item");

  bentoItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.backgroundColor = getRandomColor();
    });
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
