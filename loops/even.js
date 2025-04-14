const prompt = require("prompt-sync")()

let number = 0;
// while (number <= 12) {
//     console.log(number);
//     number += 2;
// }

// do while loop
// do {
//     console.log(number);
//     number += 2;
// } while (number <= 12);

/**
 * Ask again and again until name is not empty
 */
let yourName;
do {
    yourName = prompt("Who are you? ");
} while (!yourName);
console.log(`Hello, ${yourName}`)