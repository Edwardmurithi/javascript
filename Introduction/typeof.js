/**
 * In Javascript there are 5 different data types that
 * contain values
 *  
 * string
 * number
 * boolean
 * object
 * function
 * 
 * There six types of objects:
 * object
 * Date
 * Array
 * String
 * Number
 * Boolean
 * 
 * Add 2 data types that cannot contain values:
 * null
 * undefined
 * 
 */

console.log(typeof('John')); // return "string"
console.log(typeof(3.14)); // returns "number"
console.log(typeof(NaN)); // returns "number"
console.log(typeof([1,2,3,4])); // returns "object"
console.log(typeof(false)); // returns "boolean"
console.log(typeof(new Date())); // returns "object"
console.log(typeof(function () {})); // returns "function"

/***
 * You cannot use typeof to determine if javascript object is
 * an Array or date
 * 
 * Primitive Data:
 * A primitive data value is asingl simple data with no
 * additional propeties and mehods
 * 
 * typeof operator can retur one of these primitiv types:
 * string
 * number
 * boolean
 * undefined
 * 
 * Complex Data
 * function
 * object
 */
