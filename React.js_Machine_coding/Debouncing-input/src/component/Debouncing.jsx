import React, { useMemo, useState } from 'react'

const Debouncing = () => {

  const [inputValue, setInputValue] = useState('');
  const [apiData, setApiData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  // const [notFound,setNotFound] = useState(false);
  const CallApi = (e) => {

    const searchText = e.target.value.toLowerCase();

    if(searchText.trim() === ''){
      setFilteredData([])
      setNotFound(false)
      return
    }

  

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setApiData(json)


        const filtered  = json.filter(user => 
          user.name.toLowerCase().includes(searchText)
        )
  
        setFilteredData(filtered);

        // setNotFound(filtered.length === 0);

      })

     

    console.log("calling API", e.target.value);
  }

  const debounce = (func, wait) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), wait);
    }
  }

  const debounceCallApi = useMemo(() => debounce(CallApi, 1000), []);


  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          debounceCallApi(e)
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <h3>Search Result:</h3>
        {/* {
          notFound ? (
            <p style={{color:'red'}}>Not find any user by this name </p>
          ) */}
          {
            filteredData.length === 0 && inputValue.trim() !== '' ? (
                <p style={{color: 'red'}}>No matching users found</p>
            )
         : (
        <ul>
          {
            filteredData.map((user) => (
              <li key={user.id}>
                {user.name} {user.email}
              </li>
            ))
          }
        </ul>
  )}
      </div>
    </div>
  )
}

export default Debouncing