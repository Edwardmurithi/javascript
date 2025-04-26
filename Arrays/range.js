/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */

// returns an array starting with 'start' - 'end'
function range(start, end) {
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }

    return range;
}

// returns the sum of elemments a given array
function sum(array, optional = 1) {
    let result = 0
    for (let i = 0; i <= array.length; i += optional ) {
        result += i;
    }

    return result
}

console.log(sum(range(1,10), 3));