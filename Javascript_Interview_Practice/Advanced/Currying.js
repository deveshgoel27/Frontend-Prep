// currying => it is a technique of converting a function with multiple arguments into a sequence of functions, each taking a single argument.
// It allows you to break down a function that takes multiple arguments into a series of functions that each take one argument.
// Currying is a functional programming technique that transforms a function with multiple arguments into a series of functions, each taking a single argument.
// It allows you to create more reusable and composable functions by breaking down complex functions into simpler ones.

// Example of currying

// const sum = (a) =>{
//     return (b) =>{
//         return (c) =>{
//             return a + b + c;
//         }
//     }
// }
// console.log(sum(1)(2)(3));


// reusing variable for logic

// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//        if (operation === "sum") return a + b;
//        if (operation === "sub") return a - b;
//          if (operation === "mul") return a * b;
//             if (operation === "div") return a / b;
//             if (operation === "mod") return a % b;
//             else return "Invalid operation";
//         }
//     }
// }

// console.log(evaluate("msd")(2)(3));

     // infinite currying

    // const sum = (a) => {
    //     return function (b) {
    //         if (b) return sum(a + b);
    //         return a;
    //     }
    // }
    // console.log(sum(1)(2)());


          // curry() implimentation
    
          function curry(func){
             return function curriedFunc(...args){
                if (args.length >= func.length) {
                    return func(...args);
                } else {
                    return function(...next){
                        return curriedFunc(...args, ...next);
                    }
                }
             }
          }

        const sum = (a,b,c,d) => (a + b + c + d);
        const totalSum = curry(sum);
        console.log(totalSum(1)(2)(3)(4));