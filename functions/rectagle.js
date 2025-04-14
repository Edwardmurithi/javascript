#!/usr/bin/node

function rectagle(l, w) {
    /**
     * this function can only see the local bindings in the envron
     * there are created but not the environ they are called.
     * the environment
     */
    let length = l;
    let width = w;

    return () => length * width;
}

//The environment in which they are called `result()`
let result = rectagle(2,3);

console.log(result());