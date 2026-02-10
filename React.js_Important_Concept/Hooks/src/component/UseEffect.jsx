import React, { useEffect, useState } from 'react';

function UseEffect() {
    const [count,setCount] = useState(0);
    
     useEffect(()=>{
        setTimeout(()=>{
          setCount(count+1);
        },1000)
     },[])
     
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} >Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

// useeffect  -> is use for side effects in react
// useeffect is called after every render and after every state change and after every props change

// dependency in useeffect ->   dependencies are the values that the useeffect depends on
// if the dependency changes, the useeffect will be called again
// if the dependency is empty, the useeffect will be called once after the first render