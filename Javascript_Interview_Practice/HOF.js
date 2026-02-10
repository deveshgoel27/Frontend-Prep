// hof ->a function which takes a function as an argument or returns a function as a value


// example of a function that returns a function
function outerFunction() {
    return function innerFunction() {
        console.log("Hello from the inner function!");
    };
}
const innerFunc = outerFunction();
innerFunc(); // Output: Hello from the inner function!


// example of a function that takes a function as an argument
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
const numbers = [1, 2, 3, 4, 5];
processArray(numbers, function(num) {
    console.log(num * 2); // Output: 2, 4, 6, 8, 10
});     

