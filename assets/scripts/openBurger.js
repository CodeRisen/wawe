const burger = document.querySelector("#burger-menu");
const nav = document.querySelector("#burger-menu-nav");
let isOpen = false;

function openBurger() {
  nav.classList.toggle("open");
  isOpen = true;
}

function closeBurger() {
  nav.classList.remove("open");
  isOpen = false;
}

burger.addEventListener("click", () => {
  openBurger();
});

document.addEventListener("click", (event) => {
  if (!burger.contains(event.target) && !nav.contains(event.target) && isOpen) {
    closeBurger();
  }
});
