import React, { useState } from 'react'

const Contact = () => {

  const [todoList,setToDoList] = useState([])
  return (
    <div>
           <h1>Devesh goel</h1>
           <button onClick={()=>{
            import('../component/data').then((module)=>setToDoList(module.todos))
           }}>
            Load data 
           </button>
           <ul>
            {
              todoList.map((todo)=>(<li key={todo.id}>{todo.title}</li>))
            }
           </ul>
    </div>
  )
}

export default Contact