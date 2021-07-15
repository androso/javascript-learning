// Getting the html elements
const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.querySelectorAll("span");

function toggleNav () {
    console.log("Working!");
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateMenu();
}
function animateMenu () {
    for (let bar of hamburgerBarsEl) {
        bar.classList.toggle("change");
    }
}
navTriggerEl.addEventListener("click", toggleNav);