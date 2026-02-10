function primeNumber (num){
    if(num === 1){
        return false;
    }
    else if(num === 2){
        return true;
    }
    else{
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return `The number ${num} is not a prime number`;
            }
        }
        return `The number ${num} is a prime number`;
    }
}

console.log(primeNumber(7));