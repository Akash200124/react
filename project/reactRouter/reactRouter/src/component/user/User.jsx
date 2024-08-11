import React from "react";
import { useParams } from "react-router-dom";

function User(){

    // useparms is hook that is use to get the value from the url parameter 
    
    const {userid} = useParams()

    return(
        <div className="bg-gray-600 text-white text-3xl p-4">user:{userid}</div>
    )
}

export default User