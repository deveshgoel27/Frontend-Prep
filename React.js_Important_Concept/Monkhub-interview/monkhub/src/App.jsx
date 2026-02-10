import { useMemo, useState } from "react";
import { GlobalStateProvider, useGlobalState } from "./context/GlobalStateContext";
import ParentComponent from "./component/ParentComponent";


const callApi = (e) =>{  
  console.log( 'Calling API' ,e.target.value);
}

const debounce = (func,wait) => {
  let timerId;
  return (...args) => {
  clearTimeout(timerId);
  timerId = setTimeout(() => func(...args),wait)
 }
}

function App() {

  const [inputValue,setInputValue] = useState('');
  const debouncedCallApi = useMemo(()=>debounce(callApi,1000) , [])

  const {user,setUser} = useGlobalState();

  return (
    <> 
         {/* Devouncing  */}
      <h1>Debouncing in react</h1>
      <input 
        type="text"
        value={inputValue}
        onChange={(e)=>{
          setInputValue(e.target.value);
          debouncedCallApi(e);
        }}
      />   
      <hr />
      <hr />
          {/* ContextApi */}
          <h1>GlobalState-ContextApi</h1>
      <div style={{ padding: '1rem' }}>
            <h1>👋 Hello, {user}</h1>
            <button onClick={() => setUser("React Developer")}>
                Change Name
            </button>
              <hr />
              <hr />
            {/* Props --> (parent To child) */}
            <h1>Parent to child , child to parent</h1>
        <ParentComponent/>
        </div>
       
    </>
  )
}

export default App
