const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

function deleteToDo(event) {
    const li = (event.target.parentElement);
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveToDos();
};

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "삭제";
    span.innerText = newToDo.text;
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("Hello", item);
// };


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    parsedToDos.forEach((item) => paintToDo(item));
}
