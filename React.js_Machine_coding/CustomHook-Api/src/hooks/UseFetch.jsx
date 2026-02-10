import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
     
    const [data,setData] = useState(null);
    const [loading,setloading] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(()=>{
        const fetchData= async () =>{
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("somethinig wrong");
                }

                const result = await response.json();
                setData(result)
                
            } catch (error) {
                setError(error.message);
            } finally{
                setloading(false);
            }
        }
        fetchData();
    },[url])

  return {data,loading,error}
}

export default UseFetch