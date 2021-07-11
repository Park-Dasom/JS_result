const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

// Replaced constant //
const classNameHidden = "hidden";
const LS_username = "username";

function onLoginSubmit(event) {
    // How to input username //
    event.preventDefault();
    const userName = loginInput.value;
    // // How to save the username in localstorage // //
    localStorage.setItem(LS_username, userName);
    loginForm.classList.add(classNameHidden);
    // Hiding form, input and showing stored name // 
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(classNameHidden);
};

loginForm.addEventListener("submit", onLoginSubmit);


// If username is null, call the form or not call the h1 //

const userNameSaved = localStorage.getItem(LS_username);
if(userNameSaved === null) {
    loginForm.classList.remove(classNameHidden);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(classNameHidden);
    greeting.innerText = `Hello ${userNameSaved}`;
};
