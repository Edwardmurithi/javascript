#!/usr/bin/node

/**
 * Well copy add modifying the pasted code coul work, but not better approach.
 * @param {*} pigs (addition that farmer added to inventory)
 * @param {*} cows 
 * @param {*} chickens 
 */

/* version 1 */

/*
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);

*/



/* best approach */

function zeroPad(number, width=3) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows)} Cows`);
    console.log(`${zeroPad(chickens)} Chickens`);
    console.log(`${zeroPad(pigs)} Pigs`);
}

console.log(printFarmInventory(5,40, 9));