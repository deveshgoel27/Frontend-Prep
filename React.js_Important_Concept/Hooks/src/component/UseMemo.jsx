import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount] = useState(0);
    const [input,setInput] = useState(0);

    function expensiveTask(num){
        console.log("Inside expensive task ");
        for(let i = 0; i<=10000000 ; i++) {}
        return num*2;
    }

    let doubledValue = useMemo(()=> expensiveTask(input),[input]);  
   
  return (
    <> 
      <div>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
      </div>

      <div>
        {count}
      </div>

      <input
       type= "number"
       placeholder='Enter number'
       value={input}
       onChange={(e) => setInput(e.target.value)}
       />

       <div>
        double : {doubledValue}
       </div>
    </>
  )
}

export default UseMemo


// 🔹 Definition:
// useMemo is a React hook that memoizes a computed value so that expensive calculations are not re-executed on every render, only when dependencies change.

// 🔹 When to use:
// Expensive calculations (sorting, filtering, large loops).
// Prevent recalculating derived data on every render.

// 🔹 Syntax:
// const memoizedValue = useMemo(() => expensiveComputation(a, b), [a, b]);   


// 🔹 Interview Keywords:
// Performance optimization
// Avoids unnecessary recalculations
// Works like caching