const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.getElementById("greeting");
const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);


const HIDDEN_CLASSNAME = "hidden";

if(savedUserName === null){                             // if there is no user name in local storage
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);       // show form including input text and submit button
    loginForm.addEventListener("submit", onLoginSubmit); 

}else{
    paintGreetings(savedUserName);                      // if there is user name in local storage, greeting
}

function onLoginSubmit(event){
    event.preventDefault();                             // prevent submit 
    const username= loginInput.value;                   // get user name on the input text
    loginForm.classList.add(HIDDEN_CLASSNAME);          // hide the loginForm
    localStorage.setItem(USERNAME_KEY, username);       // save user name into local storage
    paintGreetings(username);
    
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;           // set the text of h1 as "Hello user name" 
    greeting.classList.remove(HIDDEN_CLASSNAME);        // show h1
}