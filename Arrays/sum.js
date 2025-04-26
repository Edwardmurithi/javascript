#!/usr/bin/node

function sum(arr) {
    let result = 0
    for (let val of arr) {
        result += val;
    }

    return result
}

console.log(sum([1, 2, 3, 4,  5, 6, 7, 8, 9, 10]));
