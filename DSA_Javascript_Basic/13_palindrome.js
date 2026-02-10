function palindrome(str){
    return str === str.split("").reverse().join("");
}
if(palindrome("deeveshseveed")){
    console.log("It is a palindrome");
}else{
    console.log("It is not a palindrome");    
}

// with number   

function palindromeNumber(num){
    return num === parseInt(num.toString().split("").reverse().join(""));
}
if(palindromeNumber(121)){
    console.log("It is a palindrome");
}else{
    console.log("It is not a palindrome");    
}

