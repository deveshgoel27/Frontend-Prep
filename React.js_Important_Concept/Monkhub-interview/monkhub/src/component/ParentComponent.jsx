    // parent to child 

import { useState } from "react"
import ChildComponent from "./ChildComponent"

 // import React from 'react'
// import ChildComponent from './ChildComponent'

// const ParentComponent = () => {
//   return (
//     <div>
//         <ChildComponent name="Devesh"  phone = {9205743906}/>
//     </div>
//   )
// }

// export default ParentComponent


     // Child to Parent - using callback function

     // ParentComponent.js

const ParentComponent = () => {

    const [name,setName] = useState('');

  return (
    <div>
        <ChildComponent title = "Card1" name={name} setName={setName}/>
        <ChildComponent title = "Card2" name={name} setName={setName}/>
        <p>I am inside parent Component and value of name is {name}</p>
    </div>
  )
}

export default ParentComponent; 