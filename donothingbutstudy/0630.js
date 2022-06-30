// document.title = "HI" << it changes browser's title 
// document.body << it returns html's body info
// document.dir << returns document's all INFO

const title = document.getElementById("title");

title.innerText = "TADA";

console.log(title.id);

// part 2
const hellos = document.getElementsByClassName("kenobi");
const hellos2 = document.querySelector(".kenobi"); //returns first element which class name is kenobi
const hellos3 = document.querySelectorAll(".kenobi"); //returns all element which class name is kenobi
//example: document.querySelectorAll("h2.kenobi:first-child") this returns only the first child element.

console.log(hellos);

// part 3 how js senses a certain event
const btn = document.querySelector(".clicking");

function handleButtonClick() {
    console.log("they have just clicked it");
}

btn.addEventListener("click", handleButtonClick);

//part 4
document.dir(hello); // by this you can see all propertys like: onmouselesave, onmouseout. remove 'on' when you use it

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("click", handleMouseEnter);
title.addEventListener("click", handleMouseLeave);

//part5 
const someFunction = document.querySelector("div.new");

function handleClicking() {
    const currentColor = someFunction.style.color;
    let newColor;
    if (currentColor === "#000") {
        newColor = "red";
    } else {
        newColor = "#000";
    }
    someFunction.style.color = newColor;
}

someFunction.addEventListener("click", handleClicking);

/*
----part 6 summary----

classList: it adds class and it can make use classes like a list. i guess it similar to "addClass" (jquery)
className: removes previous class
toggle function : it checks class name is exists. adds token if it doesn't have and removes if it has token.

*/

const new = document.querySelector("div.newer");

function newFunction() {
    const clickedClass = "clicked";
    if (new.classList.contains(clickedClass)) {
        new.classList.remove(clickedClass);
    } else {
        new.classList.add(clickedClass);
    }
} // and toggle element's role is same as this if else elements role.
//how to use is down below

new.addEventListener("click", newFunction);

function newerFunction(){
    new.classList.toggle("clicked");
}