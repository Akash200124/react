import React, { useState } from "react";
import UserContect from "./UserContex";

const UserConstextProver = ({children}) =>{

    const [user,setuser] = useState(null);

    return(
      
        // providing the access of user and setuser to all the that comes inside the childern 
        <UserContect.Provider value={{user, setuser}}>
        {children}
        </UserContect.Provider>
        
    )
}


export default UserConstextProver