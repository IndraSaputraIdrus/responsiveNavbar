const menuToggle = document.querySelector(".menu-toggle");
const ul = document.querySelector("ul");

menuToggle.addEventListener("click", () => {
  ul.classList.toggle("slide");
  menuToggle.classList.toggle("toggle");
});
