import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);

    const decrement = () => {
    setCount(count - 1);
    }


  return (
    <div>
   <h1>{count}</h1>
   <button onClick={()=>setCount(count+1)} >Increment</button>
   <button onClick={decrement}>Decrement</button>
   </div>
  )
}

export default UseState

// it allows function component t o manage state without using class components.