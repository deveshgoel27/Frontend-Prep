
import React, { useMemo, useState } from 'react'

const Practice = () => {

  const [inputValue, setInputValue] = useState('');
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const CallApi = (e) => {

    const searchText = e.target.value.toLowerCase();

    if (searchText.trim() === '') {
      setFilteredData([])
      return;
    }


    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setApiData(json);

        const filtered = json.filter(user =>
          user.name.toLowerCase().includes(searchText)
        )

        setFilteredData(filtered);
      })

    console.log("calling APi", e.target.value)
  }

  const debounce = (func, wait) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => func(...args), wait)
    }
  }

  const debounceCallApi = useMemo(() => debounce(CallApi, 500), []);



  return (
    <div>
      <h1>Debouncing in react</h1>
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
        {
          filteredData.length === 0 && inputValue.trim() !== '' ? (
            <p style={{ color: 'red' }}>No matching users found</p>
          )
            : (
              <ul>
                {
                  filteredData.map((user) => (
                    <li key={user.id}>
                      {user.email} {user.name}
                    </li>
                  ))
                }
              </ul>
            )}
      </div>
    </div>
  )
}

export default Practice