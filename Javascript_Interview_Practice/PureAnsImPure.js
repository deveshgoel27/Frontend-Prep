// pure function - > returns the same value for the same input

function pureAdd(a,b) {
    return (a+b);
}
console.log(pureAdd(10,20));

// impure function - > returns different value for the same input
function impureAdd(a,b) {
    return (a+b+Math.random());
}
console.log(impureAdd(10,20));

