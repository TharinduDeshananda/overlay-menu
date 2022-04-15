let plusSign = document.querySelector(".overlay");
let menuBackground = document.querySelector(".menu-background");
plusSign.addEventListener("click", () => {
  plusSign.classList.toggle("active");
  menuBackground.classList.toggle("active");
});
