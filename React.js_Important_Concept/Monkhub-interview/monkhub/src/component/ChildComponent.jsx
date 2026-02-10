// "Props are used for passing data from parent to child, but they can cause prop drilling when data is needed deep down.

// Context API solves this by allowing global state sharing without passing props manually at each level. I usually prefer props for local data, and Context API for global data like theme, auth, or user details."


// parent to child 
    
// import React from 'react'

// const ChildComponent = ({name,phone}) => {
//   return (
//     <div>
//         Hello,{name} -{phone}
        
//     </div>
//   )
// }

// export default ChildComponent


     // Child to Parent - using callback function

     import React from 'react'

     const ChildComponent = (props) => {
        return (
            <>
            <input type="text" onChange={(e)=> props.setName(e.target.value)}/>
            <p>Name state variable ki value inside {props.title} : {props.name}</p>
            </>
        )
     }
    
     export default ChildComponent;

    