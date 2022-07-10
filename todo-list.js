//TODO LIST

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");


todoForm.addEventListener("submit", formFunc);

function formFunc(event) {
    event.preventDefault();

    const taskText = todoInput.value;

    const newTask = document.createElement("li");

    newTask.innerText = taskText;

    todoList.append(newTask);


    todoInput.value = "";

    todoInput.focus();


    // //creating edit button

    // const editItem = document.createElement("button");
    // editItem.setAttribute("role", "button");
    // editItem.innerText = "EDIT"
    // newTask.append(editItem)

    // editItem.addEventListener("click", function() {
    //     this.closest("li")
    // });

    //creating delete button

    const deleteItem = document.createElement("button");
    deleteItem.setAttribute("role", "button");
    deleteItem.innerText = "X";
    newTask.append(deleteItem);

    deleteItem.addEventListener("click", function(){
        this.closest("li").remove();
    });

    deleteItem.style.background = "none"
    deleteItem.style.fontSize = "20px"
    deleteItem.style.marginLeft = "8px"
    deleteItem.style.cursor = "pointer"
    deleteItem.style.cssText += "color:rgb(254, 32, 32)"
    deleteItem.style.textShadow += "2px 4px 4px black"
    deleteItem.style.border = "none"

    newTask.style.marginBottom = "5px"
}