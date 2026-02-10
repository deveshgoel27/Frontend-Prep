let min = 3;
let max = 20;
let result = [];
let flag = true;

for(let i = min; i<=max; i++){
    flag = true;
    for(let j = 2; j< i;j++){
        if(i%j === 0){
            flag = false;
            break;
        }
    }
    if(flag){
        result.push(i);
    }
}

console.log(result);