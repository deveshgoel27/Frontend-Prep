function countvowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0 ;
    for(let ch of str){
        if(vowels.includes(ch)) count++;
    }
    return count;
}

console.log(countvowels("deveshgoel"));