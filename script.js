const fruits = ["banana", "apple", "orange", "Mango"];
console.log(fruits)

// pop() method removes the last element of the array
// returns the value that was popped out.
let popped_item = fruits.pop();
console.log("popped item is: ", popped_item);
console.log(fruits);

// push() method adds a new element to the end of the array
// returns the new length of the array
let new_length_of_array = fruits.push("pineapple");
console.log(fruits);
console.log("New length of array is: ", new_length_of_array);

// shift() method removes the first element and 'shifts' other elements
// to a lower index.
// It returns the value that was shifted out.
let shifted_item = fruits.shift();
console.log("Shifted element is: ", shifted_item);
console.log(fruits);

// unshift() method adds a new element a the beggining of the array
// and unshift older elements.
// returns the new length of the the array.
let unshifted_item = fruits.unshift("Lemon");
console.log("New array length is: ", unshifted_item);
console.log(fruits);

fruits[fruits.length] = "kiwi";
console.log(fruits);

//Merging (Concatenating) Arrays
const myGirls = ["Cecile", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


