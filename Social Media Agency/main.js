//Navigation Hemburger Function

const hemburger = document.getElementById("hemburger");
const navUL = document.getElementById("nav-ul");

hemburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
