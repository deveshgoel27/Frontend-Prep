// let str = "Deveshgoel";
// // let newStr = str.split("").reverse().join("");
//  let newStr = "";
// for(let i = str.length-1; i>=0; i--){
//     newStr += str[i];
// }

// console.log(newStr);

function reverseStr(str){
    let newStr = [];
    for(let i = str.length-1 ; i>=0 ; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseStr([1,2,3]))