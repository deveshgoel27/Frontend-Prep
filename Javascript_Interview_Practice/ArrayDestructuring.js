// arrayDistructuring  => it allows you to extract element from an array & assign them to individual variables in a single statement.

const fruits = ['apple', 'banana', 'orange', 'grape'];

// Destructuring assignment
const [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log(firstFruit); // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
console.log(remainingFruits); // Output: ['orange', 'grape']