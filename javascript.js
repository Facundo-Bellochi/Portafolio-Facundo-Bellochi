const toggle = document.getElementById("navToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("menu--activo");
});
