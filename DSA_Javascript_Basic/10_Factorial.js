factorial = (n) => {
    let fact = 1;
    if(n == 0){
        console.log(`the factorial of ${n} is 1`);
    }else if(n<0){
        console.log(`Factorial of negative number is not possible`);
    } else{
        for(let i=1;i<=n;i++){
            fact = fact*i;
        }
        console.log(`the factorial of ${n} is ${fact}`);
    }
    }

factorial(5); 