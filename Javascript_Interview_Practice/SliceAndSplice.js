// slice - extract portion of an array without modifying the original array
//   --> it returns a new array

let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let slicedFruits = fruits.slice(1, 4); // Extracts elements from index 1 to index 3 (not including index 4)
console.log(slicedFruits); // Output: ['banana', 'orange', 'grape']
console.log(fruits)

// splice - modify the original array by adding/removing elements
//   --> it returns the removed elements

let numbers = [1, 2, 3, 4, 5];
let removedNumbers = numbers.splice(1, 4); // Removes 4 elements starting from index 1
console.log(removedNumbers); // Output: [2, 3, 4]
console.log(numbers); // Output: [1, 5]