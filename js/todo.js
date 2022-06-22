const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const todoArray =[];

showSavedTodo();

function showSavedTodo(){
    const savedTodo = localStorage.getItem("todo");

    if(savedTodo){    
       // console.log(savedTodo);
        const todos =savedTodo.split(',');
      
        for(i=0; i<todos.length; i++){
            addTodoList(todos[i]);
            todoArray.push(todos[i]);
        }
    }
}


if(todoForm){
    todoForm.addEventListener("submit", onTodoSubmit);
}

function onClickDelete(event){
    //console.log(event);
    const li =event.target.parentElement;                   // button's parent --> li
    li.remove();                                            // get rid of li and their child

    // get rid of li>span innerText in todo array
    todoArray.splice(todoArray.indexOf(String(li.firstChild.innerText)),1);

    // update todo array to local storage
    localStorage.setItem("todo", todoArray);
}

function onTodoSubmit(event){
    event.preventDefault();                                 // prevent submit

    const newTodo = todoInput.value; 
    todoArray.push(newTodo); 
    addTodoList(newTodo);

    localStorage.setItem("todo", todoArray);
    todoInput.value = "";                                    // clear the input value
 }

 function addTodoList(value){

    const li = document.createElement("li");                // make a li tag
    const span = document.createElement("span");            // make a span tag
    const button =  document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", onClickDelete);
    span.innerText = value;                               // add todo input value into span 
                                    
    li.appendChild(span);                                   // append span as a child of li
    li.appendChild(button);
    todoList.appendChild(li);                               // append list as a child of ul
                                                             // <ul> <li><span> NEW TODO THING </span> <button>X</button></li></ul>
 }