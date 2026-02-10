import React from 'react'
import './App.css'
import UseFetch from './hooks/UseFetch'

const App = () => {

  // const { data, loading, error } = UseFetch('https://dummyjson.com/users');
  const { data, loading, error } = UseFetch('https://jsonplaceholder.typicode.com/users');
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error:{error}</h1>
  console.log("Fetched data:", data);

  return (
    <div>
      <h1>User List:</h1>
          {/* this is used when we have array in our object data json  */}
      {/* <ul>
        {Array.isArray(data.users) && data.users.map((user) => (
          <li key={user.id}>
            {user.firstName}  {user.lastName}
            </li>
        ))}  
      </ul> */}
      <ul>
        {
          data.map((user)=>(
            <li key={user.id}>
              {user.name} {user.email}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App