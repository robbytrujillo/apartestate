const menuBar = document.querySelector(".ri-menu-unfold-3-fill");
const menuNav = document.querySelector(".menu");
const bgNav = document.querySelector(".bg-navbar");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
  bgNav.classList.toggle("bg-active");
});

bgNav.addEventListener("click", () => {
  menuNav.classList.remove("menu-active");
  bgNav.classList.remove("bg-active")
});
