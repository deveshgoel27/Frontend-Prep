// Context API allows us to share data globally without manually passing props at every level.
// Good for theme, authentication, language, user data, etc.
// Provides a Provider and Consumer (or useContext hook).


import {createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

//create provider

export const GlobalStateProvider = ({children}) => {
    const [user,setUser] = useState("Devesh");

    return (
         <GlobalStateContext.Provider value = {{user,setUser}}>
            {children}
         </GlobalStateContext.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalStateContext);