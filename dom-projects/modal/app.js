const openModalTriggerEl = document.querySelector(".trigger");
const modalEl = document.querySelector(".modal");
const modalContentEl = document.querySelector(".modal__content")
const closeModalTriggerEl = document.querySelector(".close");

// I need a function that adds "open" to div.modal
// When user clicks X remove "open" from div.modal

function main () {
    modalEl.classList.toggle("open");
}
function outsideClick (event) {
    if (event.target == modalEl) {
        modalEl.classList.toggle("open");
    }
}
openModalTriggerEl.addEventListener("click", main);
closeModalTriggerEl.addEventListener("click", main);
window.addEventListener("click", outsideClick);


  
