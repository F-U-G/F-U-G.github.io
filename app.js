const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector("#main-menu ul");

menu.addEventListener("click", (e) => {
  menuLinks.classList.toggle("active");
});
