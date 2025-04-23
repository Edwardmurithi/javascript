#!/usr/bin/node
const prompt = require("prompt-sync")();

const numberToGuess = Math.floor(Math.random() * 10) + 1;
let counter = 0;

function evaluateTheGuess() {
    while (true) {
        const guess = Number(prompt("Guess the number: "));
        if (isNaN(guess)) {
            console.log("Please Enter a valid value!");
            continue;
        }
    
        counter ++;
        if (counter > 3) {
            console.log("You have reached maximum atempts");
            break;
        }
    
        if (guess < numberToGuess) {
            console.log("📉 Too Low! try again.");
        } else if(guess > numberToGuess) {
            console.log("📈 Too High! try again.");
        } else {
            console.log("✨🎉 Correct your guessed it")
            break
        }
    }
}

evaluateTheGuess()