const inputElement = document.querySelector('input');   

// created debounce
const debounce = (func,wait) => {
    let timerId;
    return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args),wait) 
}
}

const callApi = (e) =>{  
    console.log( 'Calling API' ,e.target.value);
}
   // calling it 
const debouncedCallApi = debounce(callApi,1000);


inputElement.addEventListener('input',debouncedCallApi);


  // memoization

const cache = {};
function calculation(a,b){
    let result = (a+b)*(a+b);
    console.log("calc func called ",result)
    return result;
}

function memory (a,b){
    const key = a+":"+b;
    if(!cache[key]){
        const result = calculation(a,b);
        cache[key] = result;
        return result;
    }else{
        console.log("result from cache",cache[key]);
           return cache[key];
    }
}