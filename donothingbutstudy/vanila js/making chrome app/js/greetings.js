const loginButton = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username" //this prevents the typo mistakes so js can notifies the alert that i have some issues...

function onLoginSubmit(event) {
    /*
    if (username === "") {
        alert("please write your name");
    } else if (username.length > 15) {
        alert("your name is too long");
    }
    */
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

//setItem : an element that saves something...
//ex1: localStroage.getItem("username")
//ex2: localStroage.removeItem("username")

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //shows the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginButton.addEventListener("submit", onLoginSubmit);
} else {
    //shows the greetings
   paintGreetings(savedUsername);
}

//nothing but rubbish: i just want to go home