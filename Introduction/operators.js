const prompt = require("prompt-sync")()

let theNumber = Number(prompt("Pick a number "));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of "+ theNumber * theNumber)
} else {
    console.log("Hey. why didn't you give me a number");
}