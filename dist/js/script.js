const menuBar = document.querySelector(".ri-menu-unfold-3-fill");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});
