function findAllIndices(arr,target){
    let indecies = [];
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === target){
            indecies.push(i);
        }
    }
    return indecies;
}

console.log(findAllIndices([1, 2, 3, 2, 4, 2,3], 3)); // [2,6]
console.log(findAllIndices(['a', 'b', 'a', 'c','a'], 'a')); // [0, 2,4]
