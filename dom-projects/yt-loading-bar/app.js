const loadingBar = document.querySelector(".loading-bar__item");
const buttonsEl = document.querySelectorAll(".buttons button");

//Add event listener to each button
//When a button is clicked, i want to get its innerHtml
    //Because it is a string I'm gonna parseInt it
    //I'mma store that number in a var called limit
//I'm gonna call counter
//I'm gonna pass that var as an argument to the func inside counter
    //If width == that number then we return
    //Else we keep going

function counter (limit) {
    let width = 0;
    let counterId = setInterval(function () {
        loadingBar.style.width = width + "vw";
        if (width >= limit) {
            clearInterval(counterId);
        }
        width++;
    }, 10, limit);
}
function getLimit (event) {
    let button = event.target;
    let limit = parseInt(button.innerHTML);
    counter(limit);
}
function addListenerToArray (array, event, func) {
    for (let item of array) {
        item.addEventListener(event, func)
    }
}
addListenerToArray (buttonsEl, "click", getLimit);