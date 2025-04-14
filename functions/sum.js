/**
 * create a recursion function that sum values
 * from 1-10
 * expected result = 55;
 */

function sumOfNumbers(range) {
    if (range === 1) {
        return 1;
    } else {
        return range + sumOfNumbers(range - 1);
    }
}

console.log(sumOfNumbers(10))