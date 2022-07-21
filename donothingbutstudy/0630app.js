const loginButton = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

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
    console.log(username);
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove();
}

loginButton.addEventListener("submit", onLoginSubmit);