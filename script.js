const toggleMenu = document.querySelector(".toggle__menu");
const headerNava = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
     toggleMenu.classList.toggle("open");
     headerNava.classList.toggle("open");
});