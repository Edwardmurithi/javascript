#!/usr/bin/node
/**
 * roundTo - function
 *         - rounds number to the nearest multiple of step
 */

let number, step;

const prompt = require("prompt-sync")();

/** prompt input from keyboard */
number = Number(prompt("Number: "));
step = Number(prompt("Step: "));

/* function to round the number to nearest multiple of step */
const roundTo = function (n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

/* log output to the user by calling the function */
console.log(roundTo(number, step));