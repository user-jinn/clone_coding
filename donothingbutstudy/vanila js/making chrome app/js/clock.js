const clock = document.querySelector("h2#clock");

//interval : it makes some events every miliseconds

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}`
}

getClock();
setInterval(getClock, 1000); //5000 = 5 seconds