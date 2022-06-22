const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.getElementById("greeting");
const USERNAME_KEY = "userName";
const h3 = document.querySelector("#todo-form");


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
    const hours = new Date().getHours();
    let hourGreeting = 'Hello';

    if(hours < 12 && hours >=6){
        hourGreeting = "Good morning, ";
    }else if(hours <16 && hours >=12){
        hourGreeting = "Good afternoon, ";
    }else{
        hourGreeting = "Good evening, ";
    }
    
    greeting.innerText = `${hourGreeting} ${username}.`;           // set the text of h1 as "Hello user name" 
    greeting.classList.remove(HIDDEN_CLASSNAME);        // show h1
    h3.classList.remove(HIDDEN_CLASSNAME); 
}