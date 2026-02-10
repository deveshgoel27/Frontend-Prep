// //  q1 - what is function decleration? 
       function square(num){
         return num * num;
       }
// //  q2 - what is function expression? 

      const square = function (num){
         return num * num;
       }

 // q3 - what is first class function? - A function that can be treated like any other value, such as being passed as an argument to another function, returned from a function, or assigned to a variable.
    function square(num){
     return num * num; 
    }

    function displaySquare(fn) {
     console.log("Square is:" + fn(5));
    }

   displaySquare(square);
 //Q4 -> what is iife ? Immediately Invoked Function Expression
     (function square (num){
       console.log(num*num);
     })(5);

  // Q5 - iife -o/p based question

  (function (y){
    return (function (x) {
    console.log(x);
  })(2);
})(1);

// Q6 - Functiion scope -O/p based question

for(let i = 0; i<5;i++){
  setTimeout(function() {
    console.log(i);
  }, i* 1000);
}  // output -> 5 5 5 5 5 // because of closure the value of i is 5 when the setTimeout is called

// Q7 - Function hoisting - O/p based question

    functionName();
  function functionName() {
      console.log("Function is called");
    }
   console.log(x);  
  var x = 10;

 // q8 - callback functuiins 
 document.addEventListener("click", function (params){
     console.log("Document clicked", params);
 })
    
    

// Q9- arrow function vs regular function

// 1 - Syntax
function square(num) {
  return num * num;
}

const squareArrow = (num) => num * num;

//2 - Imlicit return
const add = (a, b) => a + b;

//3 - arguments 
function regularFunction() {
  console.log(arguments);
}

regularFunction(1, 2, 3); // [1, 2, 3]

const arrowFunction = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
}

//4 - this keyword
const obj = {
  value: 10,
  regularFunction: function() {
    console.log(this.value); // 10
  },
  arrowFunction: () => {
    console.log(this.value); // undefined, as 'this' refers to the global object
  }
};

// why we not use this in arrow function? -> arrow functions do not have their own 'this' keyword, they inherit the 'this' keyword from the parent scope.
