const loginButton = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(event) {
    /*
    if (username === "") {
        alert("please write your name");
    } else if (username.length > 15) {
        alert("your name is too long");
    }
    */
   event.preventDefault();
   console.log(loginInput.value);
}

loginButton.addEventListener("submit", onLoginSubmit);