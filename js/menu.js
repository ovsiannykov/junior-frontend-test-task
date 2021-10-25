let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
