function frequency(str){
    let freq = {};
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1 ;
    }
    return freq;
}

console.log(frequency([1,2,1,3,1,2]))