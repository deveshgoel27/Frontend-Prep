function removeDuplicate(str){
     let result = "";

     for(let i = 0 ; i<str.length ; i++){
        let deuplicate = false;

        for(let j = 0 ; j < i ; j++){
            if(str[i] == str[j]){
                deuplicate = true;
                break;
            }
        }
        if(!deuplicate){
            result += str[i];
        }
     }
     return result;
}

console.log(removeDuplicate("deveshgoel"));