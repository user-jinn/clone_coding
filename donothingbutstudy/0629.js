const age = parseInt(prompt("how old are u"));

if (isNaN(age) || age < 0) {
    console.log("please write a real positive number");
} else if (age < 18) {
    console.log("you're too young");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("maybe you should stop drinking");
} else if (age > 80) {
    console.log("do whatever you want");
}

// operator recap
/*
    === is same as =
    || is same as or
    && is same as and

    true || true === true
    false || true === true
    true || false === true
    false || false === false

    true && true === true
    false && false === false
    true && false === false
    false && false === false
*/