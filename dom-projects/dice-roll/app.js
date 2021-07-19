const buttonEl = document.querySelector(".dice__trigger");
const imgEl = document.querySelector(".dice__image");
const randomNumber = Math.ceil(Math.random() * 6);

function number () {
    return Math.ceil(Math.random() * 6);
}
function changeImg () {
    imgEl.setAttribute("src", "images/dice" + number() + ".png");
}

buttonEl.addEventListener("click", changeImg);