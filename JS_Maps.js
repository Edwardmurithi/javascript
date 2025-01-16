// Maps
/**
 * Maps hold key-value pair where the keys can be any datatype
 * A Map remembers the original insertion order of the keys
 * 
 * Methods:
 * new Map() - creates a new Map
 * set() - Sets a value for a key in a Map
 * get() - Gets the value for key in a Map
 * delete() - Removes a Map element specified by the key
 * has() - Return true if a key exists in Map
 * forEach() - calls a function for each key/value pair in a Map
 * entries() - Return an iterator with the [key, value] pairs in a Map
 * 
 * Properties:
 * size- returns the number of elements in a Map
 */

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// add elements to a Map using set() method
fruits.set("pineapple", 600);
fruits.set("mangos", 100);

console.log(fruits.size); // size returns the number of elements in a map

// set() method can also be use to change existing Map
fruits.set("apples", 800);
console.log(fruits.entries());

// The get() method gets the value of a key in a Map
let get_value = fruits.get("apples");
console.log(get_value)

// has() method returns true if a key exists in a Map
let isPresent = fruits.has("bananas");
console.log(isPresent)

// delete() method removes a Map element
fruits.delete("apples")
console.log(fruits.entries())

// forEach() method calls a function for each key/value pair in a Map
let text = "";
fruits.forEach(function(value, key) {
    text += key + ' = ' + value + '\n';
})

console.log(text);



