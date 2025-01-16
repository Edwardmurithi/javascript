// Sets
/**
 * JS Sets is a collection of unique values
 * Each value can occur once in a Set
 * 
 * Methods:
 * new Set(), add(), delete(), has(), forEach(), values()
 * 
 * Properties:
 * size returns the number of elements in Set.
 * 
 * You create a set by passing an Array to a new Set().
 * use add() to add values or variables.
 */

const letters = new Set(['a','b','c']);

let sizeOfSet = letters.size; //return 3

// Add new Values to the Set
// If you add equal elements, only the first will be saved.
letters.add('d');
letters.add('h')
letters.add('h');

// values() method - returns a new iterator object containing all values in Set.
let values = letters.values(); // Retuns [object Set Iterator]
console.log(values);
// Now You can use the iterator object to access the element.
let txt = '';
for (let x of letters.values()) {
    txt += x + ' ';   
}
console.log(txt);

// foEach() method - invokes (calls) function for each set statement
let text = '';
letters.forEach(function(value) {
    text += value + ' ';
});

console.log(text)
