let name = "androso is trying to escape, yes";
//console.log(name.length);
//name.lastIndexOf("o");
//name.slice(0,5);
//let number = 23;
//number.toString();

//Using split iot string -> array
// console.log(name.split(" "));

let ingredients = []
let answer = prompt("Do you want to create a new recipe?");
if (answer.toUpperCase() === "YES") {
  let noIngredients;
  noIngredients = getInt(noIngredients, "How many ingredients do you need?");

  for (let i = 0; i < noIngredients; i++) {
   let ingredient;
   ingredient = getText (ingredient, "Give me an ingredient");
   ingredients.push(ingredient);
  }
} else {
   alert("Cool");
}

function getText (object, text) {
  do {
    object = prompt(text);
  } while (!isNaN(object));
  return object;
}
function getInt (object, text) {
  do {
    object = prompt(text);
  } while (isNaN(object));
  return object;
}
 console.log(ingredients);