/**
 * CLUSURE:
 * 
 * multiplier is called and creates an environment in
 * which its factor parameter is bound to 2. 
 * The function value it returns, which is stored in twice, 
 * remembers this environment so that when that is called, it 
 * multiplies its argument by 2.
 * 
 */

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));