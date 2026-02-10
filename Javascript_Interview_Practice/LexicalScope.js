// lexical scope -> can not accesss variable from inside of function only can access variable from outside of function

// Example of lexical scope
function outerFunction() {
    const outerVariable = "I am from the outer function!";


    function innerFunction() {
        console.log(outerVariable); // Accessing the outer variable
    }

    innerFunction(); // This will log: "I am from the outer function!"
}
outerFunction(); // Call the outer function to see the output

