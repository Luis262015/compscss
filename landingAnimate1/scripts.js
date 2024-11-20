document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image img");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };

  const displayScrollElement = (element) => {
    element.style.opacity = "1";
    element.style.transform = "none";
  };

  const handleScrollAnimation = () => {
    if (elementInView(heroContent, 1.25)) {
      displayScrollElement(heroContent);
    }
    if (elementInView(heroImage, 1.25)) {
      displayScrollElement(heroImage);
    }
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Inicialización en caso de que ya estén visibles
  handleScrollAnimation();
});
