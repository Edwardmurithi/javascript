// Js Math allows you to perform mathematical tasks on numbers.
console.log('PI -', Math.PI);       // Returns PI
console.log('E -', Math.E);        // Returns Euler's number
console.log('SQRT2 -', Math.SQRT2);    // Returns square root of 2
console.log('SQRT1_2 -', Math.SQRT1_2);  // Returns square root of 1/2
console.log('LN2 -', Math.LN2);      // Returns natural logarithm of 2
console.log('LN10 -', Math.LN10);     // Returns natural logarithm of 10
console.log('LOG2E -', Math.LOG2E);    // Returns base 2 logarithm of E
console.log('LOG10E -', Math.LOG10E);   // Returns base 10 logarithm of E

// Math Methods
// common methods around number to an integer

let number = 10.543545373423;

console.log("\n\nMath Methods\n")
console.log(Math.round(number));    // round number to its nearest int
console.log(Math.ceil(number));     // round number up to it nearest int
console.log(Math.floor(number));    // round number down to it nearest int
console.log(Math.trunc(number));    // return integer part of number

// sin, cos,tan returns angles in radians,
/**
 * Convert radians to degree
 * angle in radians = angle in degrees * PI/180
 */
console.log(Math.sin(60 * Math.PI/180)); // returns of 90 in degree

// sign - returns if number is positive, null, negative
/**
 * 2 - positive
 * 0 - null
 * -2 - negative
 */
console.log(Math.sign(2));

// pow() - returns the value of x to the power of y
console.log(Math.pow(5, 2));

//sqrt() - returns the square root of value
console.log(Math.sqrt(64));

// random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // return random integer from 0 - 9