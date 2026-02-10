// callback function=> a function passed as an argument to another function
// it is executed after the completion of another function

function display (x,y,operation) {
    let result = operation(x,y);
    console.log(result);
}

display(10,20,(a,b)=> a+b); // Output: 30

