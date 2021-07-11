console.log("This is my last war");
console.log("Enjoy the journey");
for (let i = 0; i < 10; i ++) {
    console.log("This is " +i + " round");
}

let h1El = document.querySelector("h1");
h1El.style.color = "orange";
let content = document.createElement("p");
content.innerHTML = "hey, this is text inside of the p tag";
content.style.fontSize = "24px";
let body = document.querySelector("body");
body.appendChild(content);

const rootElement = document.documentElement;
const firstBatch = rootElement.childNodes; 
console.log(firstBatch);



let firstLink = document.body.getElementsByTagName("a")[0];
let titles = document.body.getElementsByClassName("title")[0];
console.log(titles); 