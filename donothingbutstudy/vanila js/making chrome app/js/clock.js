const clock = document.querySelector("h2#clock");

//interval : it makes some events every miliseconds

function getClock() {
    const date = new Date();
    const hours = Sting(date.getHours()).padStart(2, "0");
    const minutes = Sting(date.getMinutes()).padStart(2, "0");
    const seconds = Sting(date.getseconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //5000 = 5 seconds