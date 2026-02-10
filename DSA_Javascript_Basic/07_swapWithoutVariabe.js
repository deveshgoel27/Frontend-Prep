let a = 5;
let b = 7;

console.log("Before swap: a =", a, "b =", b);

// [a, b] = [b, a];

a = a+b; // a = 12
b = a-b; // b = 5
a = a-b; // a = 7

console.log("After swap: a =", a, "b =", b);