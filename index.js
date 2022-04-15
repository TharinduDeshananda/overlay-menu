let plusSign = document.querySelector(".overlay");
let menuBackground = document.querySelector(".menu-background");
let menu = document.querySelector(".overlay-menu");
plusSign.addEventListener("click", () => {
  plusSign.classList.toggle("active");
  menuBackground.classList.toggle("active");
  menu.classList.toggle("active");
});
