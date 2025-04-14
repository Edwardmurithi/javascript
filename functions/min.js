#!/usr/bin/node

const min = function (val1, val2) {
    if (val1 < val2) { return val1 }
    return val2
}

console.log(min(1, 9))