// Micro-program that prompts the user for a recipe and stores them in an array.
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