// Sample JavaScript for basic functionality
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Dropdown Menu for Mobile
  const hasChildren = document.querySelectorAll(".has-children > a");

  hasChildren.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === "block" ? "none" : "block";
      }
    });
  });

  // Sticky Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});
