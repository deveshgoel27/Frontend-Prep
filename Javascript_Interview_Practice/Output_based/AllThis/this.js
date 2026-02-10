// this(implicit binding) -> this keyword refers to the object that is currently executing the code.
//  It can be used to access properties and methods of the current object, or to invoke functions on the current object.


// Q1 - > output?

const user = {
    firstName: "devesh",
    getName() {
        const firstName = "devesh !";
        return this.firstName;
    }
}

console.log(user.getName());


// Q2 - > output?
    
const user2 = {
    name: "devesh",
    logMessage() {
        console.log(this.name);
    }
}
setTimeout(user2.logMessage, 1000); // undefined
// setTimeout is called in the global context, so 'this' refers to the global object, not user2.

// how can we crct it? 
setTimeout(() => user2.logMessage(), 1000); // devesh


//  Q3 - > output?

const user3 = {
    name:"devesh goel",
    greet(){
        return `Hello, ${this.name}`;
    },
    fareWell: () => {
        return `Goodbye, ${this.name}`;
    }
};

console.log(user3.greet()); // Hello, devesh goel
console.log(user3.fareWell()); // Goodbye, undefined
// The 'greet' method uses a regular function, so 'this' refers to user3.
// The 'fareWell' method uses an arrow function, so 'this' refers to the global object.


// Q4 - > create an obect calculator

let calculator = {
    read() {
        this.a = 5;
        this.b = 10;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
    
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());



// Q5 - > output?

var length = 4;
function callback() {
    console.log(this.length);
}
const obj = {
    length: 5,

     method(fn) {
        fn();
    }
};

obj.method(callback);

// Q6 - > implement calc?

const calc = {
    total:0,
    add(a){
        this.total += a;
        return this; // return the object to allow method chaining
    },
    subtract(a){
        this.total -= a;
        return this; // return the object to allow method chaining
    },
    multiply(a){
        this.total *= a;
        return this; // return the object to allow method chaining
    }
}
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);




