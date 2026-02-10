isArmstrong = (number) =>{
    let numberOfDigits = number.toString().length;
    let temp = number;
    let sum = 0;

    while(temp>0){
        let remainder = temp%10; // get the last digit - 3
        temp = Math.floor(temp/10); // remove the last digit - 15
        sum = sum + Math.pow(remainder, numberOfDigits); 
    }
    console.log(`value of sum is ${sum}`);
    if(sum === number){
        return true;
    }
        return false;
}

console.log(isArmstrong(153));
console.log(isArmstrong(9474)); 
