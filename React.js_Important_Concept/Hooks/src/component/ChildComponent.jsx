import React from 'react'

const ChildComponent = React.memo(
        (props) => {
            console.log("child component got re-renderd again")
  return (
  
    <div>
         <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
}
)
export default ChildComponent