// script.js

// Efecto de paralaje en la sección de héroe
document.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const hero = document.querySelector(".hero");

  // Ajusta la posición de fondo de la sección de héroe
  hero.style.backgroundPositionY = -scrollY * 0.5 + "px";
});
