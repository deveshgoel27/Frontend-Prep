const arr = [5,7,88,10,1];

// const minarr = Math.min(...arr);
// const maxarr = Math.max(...arr);

// console.log(minarr);
// console.log(maxarr);



function findMaxMin(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        } else if(arr[i] < min){
            min = arr[i];
        }
    }
    return `minimun and maximum value from array  ${[min,max]}`;
}

console.log(findMaxMin(arr));