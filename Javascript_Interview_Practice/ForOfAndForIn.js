// for-of -> iterable objects // like arrays, strings, maps, sets

let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value); // Output: 1 2 3 4 5
}

// for-in -> iterate over  properties of an object
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`); // Output: a: 1 b: 2 c: 3
}
