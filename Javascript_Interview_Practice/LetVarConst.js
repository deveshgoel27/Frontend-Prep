// var - function scope,  redeclairable, reassignable
   var a = 10;
    var a = 20; // redeclared
    console.log(a); // Output: 20

   var b = 10;
    b = 20; // reassigned
    console.log(b); // Output: 20

// let - block scope, not redeclairable, reassignable
    let c = 10;
    //let c = 20; // Uncaught SyntaxError: Identifier 'c' has already been declared
    
    c = 20; // reassigned
    console.log(c); // Output: 20

// const - block scope, not redeclairable, not reassignable
    const d = 10;
    // const d = 20;    // Uncaught SyntaxError: Identifier 'd' has already been declared
    
    // d = 20;    // Uncaught TypeError: Assignment to constant variable.
    console.log(d); // Output: 10