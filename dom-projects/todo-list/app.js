// Getting the elements we're gonna need
const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const allCheckboxes = document.querySelectorAll(".todo__item__status");

function getInput (event) {
    if (event.key == "Enter") {
        //Creating the checkbox
        let newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type", "checkbox");
        newCheckbox.className = "todo__item__status";
        newCheckbox.addEventListener("click", dismissItem);
        //LI element
        let newListItem = document.createElement("li");
        newListItem.appendChild(newCheckbox);
        newListItem.classList.add("todo__item");
        
        //Input text
        let inputText = document.createTextNode(todoInputEl.value);
        newListItem.appendChild(inputText);

        //Appending to the list
        const todoItemsEl = document.querySelectorAll(".todo__item");
        todoListEl.insertBefore(newListItem, todoItemsEl[0]);
        
        todoInputEl.value = '';
    }
}
function dismissItem (event) {
    let itemCheckbox = event.target;
    let listItem = event.target.parentElement;
    listItem.classList.add("done");
    listItem.parentElement.appendChild (listItem);
    itemCheckbox.setAttribute("disabled", "true"); 
}
function addListenerToNodeList (list, event, fn ) {
    if (arguments.length != 3) {
        return "you didn't provide enough arguments";
    }
    for (let item of list) {
        item.addEventListener(event, fn);
    }
}
todoInputEl.addEventListener("keydown", getInput);
addListenerToNodeList(allCheckboxes, "click", dismissItem);