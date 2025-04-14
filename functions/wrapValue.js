/**
 * Closure - a function that references binding from a local scope around it.
 */

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());     // 1
console.log(wrap2());     // 2