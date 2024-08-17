import React from "react";

const UserContect =  React.createContext()

export default UserContect 

// this first step to create the context 
// we warp the component inside the UserContext and all the component in it will get the access directaly all the state  
//<UserContect>
// <Card>
//     <Data>
//    </Card>      
//</UserContect>