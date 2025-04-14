#!/usr/bin/node

let number;

const prompt = require("prompt-sync")();

const square = function(x) {
    return x * x;
}

number = Number(prompt("Enter number: "));
console.log(square(number)); 

