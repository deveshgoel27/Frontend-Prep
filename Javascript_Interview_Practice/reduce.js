// reduce() method in JavaScript
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers =[1,2,3,4,5];

const sum = numbers.reduce((accum,currVal) =>{
    return accum + currVal;
},0);

console.log(numbers);
console.log(sum);


