// map - use to modify the elements of an array
//   --> it returns a new array with the modified elements

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((num) => num * 2); // Doubles each element in the array
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers)


// forEach - use to iterate over each element of an array
//   --> it does not return a new array, it simply executes a function for each element

 let arr = [1, 2, 3, 4, 5];
 arr.forEach((num)=> {
    num * 2
    console.log(num * 2); // Output: 2, 4, 6, 8, 10 (prints each doubled value)
 });