// Conditional (Ternary) Operator
// variablename = (condition) ? value1:value2;
let compare = (4 > 5) ? '4 is greater than 5': '5 is greater than 4';
// console.log(compare);

/**
 * This will evaluate to true
 * because alphabetically 2 is greater than 1
 */
let str1 = '2';
let str2 = '12';

// console.log(str1 > str2);

// to secure the result use proper type before comparison.
let age = Number(22);
let voteable;

if (isNaN(age)) {
    voteable = "Input not a number.";
} else {
    voteable = (age > 18) ? "Adult":"Child";
}

// console.log(voteable);

// Nullish coalescing operator (??)
// The ?? operator returns the first argument if is not nullish (null or undefined)
// Otherwise returns it second argument
let name = null;
let text= 'missing';
let result = name ?? text;

// console.log("The name is ", result);

// Optional chaining operator (?.)
// The ?. operator returns undefined 
// if an object is undefined or null (instead of throwing an error).
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name)