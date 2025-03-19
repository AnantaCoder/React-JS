import React, { useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) =>{
    const[user,setUser] = useState(null)
    return(
        //prop objects inside providers and all the methods inside it 
        <UserContext.Provider value= {{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider
