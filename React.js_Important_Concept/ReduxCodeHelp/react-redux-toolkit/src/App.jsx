import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount, reset } from './features/counter/counterSlice'
import './App.css'
import { useState } from 'react'


function App() {
   const [amount,setAmount] = useState(0)
   const count = useSelector(state => state.counter.value)
   const dispatch = useDispatch();

  function handleIncrementClck(){
       dispatch(increment())
  }

  function handleDecrementClck(){
       dispatch(decrement())
  }

  function handleResetClck(){
       dispatch(reset())
  }

  function handleIncrementAmount(){
       dispatch(incrementByAmount(amount))
  }


  return (
    <div className = "container">
      <button onClick={handleIncrementClck} >+</button>
      <p>count:{count}</p>
      <button onClick={handleDecrementClck} >-</button>
      <br /><br />
      <button onClick={handleResetClck} >reset</button>
     
       <br /><br />
       <input
        type="Number"
        value={amount}
        placeholder='enter number'
        onChange={(e)=> setAmount(e.target.value)}
        />
 <br /><br />
      <button onClick={handleIncrementAmount} >IncrementByAmount</button>
    </div>
  )
}

export default App
