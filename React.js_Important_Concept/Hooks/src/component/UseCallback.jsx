import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseCallback = () => {

    const [count,setCount] = useState(0);

    const handleClick = useCallback(()=>{
        setCount(count+1);
    },[count])

  return (
    <div>
        <div>
          count : {count}
        </div>
           <br />
        <button onClick={handleClick} > 
            Increment
        </button>
        <br/> <br/>

        <div>
            <ChildComponent
                buttonName ="Click me"
                handleClick={handleClick}
             />
        </div>
    </div>
    
  )
}

export default UseCallback;


// 🔹 Definition:
// useCallback returns a memoized version of a function so that the function reference does not change on every render.

// 🔹 When to use:

// Passing functions to child components (avoids unnecessary re-renders).
// Optimizing event handlers.
// Works well with React.memo.

// 🔹 Syntax:
// const memoizedFn = useCallback(() => {
//    doSomething(a, b);
// }, [a, b]);

// 🔹 Interview Keywords:
// Prevents unnecessary re-renders of children
// Stabilizes function identity
// Used with React.memo

