  // Array find method
// The `find` method returns the value of the first element in the array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

const array = [1,2,3,4,5,6]
let result = array.find((num)=> num %2 === 0);

console.log(result); // Output: 2 (the first even number in the array)
console.log(array)

// Array filter method
// The `filter` method creates a new array with all elements .
// The `filter` method does not change the original array.

const arrayFilter  = [1,2,3,4,5,6]
let filteredResult = arrayFilter.filter((num)=> num % 2 === 0);

console.log(filteredResult); // Output: [2, 4, 6] (all even numbers in the array)
console.log(arrayFilter)