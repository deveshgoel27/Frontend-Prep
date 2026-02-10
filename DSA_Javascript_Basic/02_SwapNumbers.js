// let a = 10 , b = 20;
// console.log(`Before Swapping : a = ${a} and b = ${b}`);

// // using temp variable

// // let temp = a;
// // a = b ;
// // b = temp;

// // using destructuring
// [a,b] = [b,a];
// console.log(`After Swapping : a = ${a} and b = ${b}`);



              // without temp variable
let a = 10, b =20;
console.log(`Before Swapping : a = ${a} and b = ${b}`);

a = a+b; // a = 30
b = a-b; // b = 10
a= a-b; // a = 20