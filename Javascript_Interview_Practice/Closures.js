// A closure is a function that remembers the variables from its outer (enclosing) function, even after the outer function has finished executing.
function outerFunction(){
    let name = "Devesh";

    function innerFunction() {
        console.log(name);
    }

    return innerFunction;
}

 let inner = outerFunction();
 inner();