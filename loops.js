// Loops execute block of code a number of times
/**
 * Different kinds of loops in javascript
 * for loop - execute block of code a number of times
 * for/in loop - loops through the properties of an object
 * for/of loop - loops through the values of iterable object
 * while loop - loops through a block of code when a specified condition is true.
 * do/while loop - also loops through of code when a specified condition is true but atleast the block is executed once.
 */

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// looping through array values
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// let i = 0;
// let len = cars.length;
// let text = "";

// for (; i < len;) {
//     text += cars[i] + '\n';
//     i++
// }

// console.log(text)



// For in Loop
// Loops through the propeties of an object.
/**
 * syntax
 * for (key in object) {
 * // code block to be executed
 * }
 * for in loop iterates over an object
 * each iteration returns a key (value)
 * this is used to access the value of the key
 * 
 * It can also be used to loop over the arrays.
 * do not used fo in loop in arrays if order is important.
 */
// Example
const person = {fname:'Edward', lname:'Mutethia', age: 32, gender:'Male'};
/*let txt = "";

for (let x in person) {
    txt += person[x] + ' ';
}
console.log(txt);*/



// Array.forEach()
/**
 * The forEach() method calls a function(a callback function)
 * once for each array element
 */

const numbers = [45, 4, 9, 16, 25];
let txt = '';
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + ' '
}

// console.log(txt)

/**
 * Note that the function takes 3 arguments:
 * The item value, index, array.
 * The example above uses only the value parameter. It can be rewritten
 * to
 * 
 * function myFunction(value) {
    txt += value + ' '
}
 */



// The For of Loop

/**
 * Js For of statement loops through the values of an itarabe
 * object.
 * It lets loop over iterable data structures such arrays,
 * Strings, Maps, NodeLists and more
 * 
 * syntax
 * for (variable of iterable) {
 *  //code block to be executed
 * }
 * 
 * variable - For every iteration the value of next property
 * is assigned to the variable.
 * 
 * iterable - an object that has iterable propeties
 * 
 */

// Looping over an array
let text = '';
/*for (let car of cars) {
    text += car + ' ';
}

console.log(text);*/


// Javascript While Loop
let i = 0

// while (i <= 10) {
//     text += i + ' '
//     i++;
// }



// The Do while
do {
    text += "The number is " + i + '\n';
    i++
} while(i <= 10);

console.log(text);



// While loop and for loop
/**
 * If you are keen yoou will discover that the for loop is
 * much similar to while loop with statement1 and statement3
 * omitted.
 */

let iter = 0;
for(;iter < 10;) {
    text += cars[iter];
    iter++
}


while (iter < 10) {
    text += cars[iter];
    iter++
}

// break - 'jumps out' of the loop
// continue - 'jumps over' one iteration in a loop.

// Javascript Labels
// To label a JS statement you proceed the statements with
// a label name and a colon.
/**
 * label:
 * staements
 */
let s = '';
list: {
    s += cars[0] + '\n';
    s += cars[1] + '\n';
    
    break list;
    s += cars[3] + '\n';
    s += cars[2] + '\n';

}

console.log(s)