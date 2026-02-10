//Hoisting -> JS default behaviour where () & variables declarations are moved to the top of their containing scope.
// Hoisting applies to function declarations and variable declarations (not initializations)

console.log(a); // undefined
var a = 5;
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
function hoistedFunction() {
    console.log("This function is hoisted!");
}   
hoistedFunction(); // This function is hoisted!


console.log(hoistedVariable); // undefined
var hoistedVariable = "This variable is hoisted!";

console.log(hoistedLetVariable); // ReferenceError: Cannot access 'hoistedLetVariable' before initialization
let hoistedLetVariable = "This variable is hoisted with let!";

console.log(hoistedConstVariable); // ReferenceError: Cannot access 'hoistedConstVariable' before initialization
const hoistedConstVariable = "This variable is hoisted with const!";

// Function expressions are not hoisted
const functionExpression = function() {
    console.log("This is a function expression.");
};
functionExpression(); // This is a function expression.

// Arrow functions are also not hoisted
const arrowFunction = () => {
    console.log("This is an arrow function.");
}   
arrowFunction(); // This is an arrow function.      


