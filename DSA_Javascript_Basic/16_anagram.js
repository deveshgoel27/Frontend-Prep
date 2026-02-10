function anagram(str1,str2){
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(anagram('listen','silent')); 


function isAnagram(str1, str2) {
    // First, check if lengths are equal
    if (str1.length !== str2.length) return false;
    // Create frequency counters
    const count1 = {};
    const count2 = {};
    // Count characters in first string
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        count1[char] = (count1[char] || 0) + 1;
    }
    // Count characters in second string
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        count2[char] = (count2[char] || 0) + 1;
    }
    // Compare both frequency maps
    for (let key in count1) {
        if (count1[key] !== count2[key]) {
            return false;
        }
    }

    return true;
}
// Example usage:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
