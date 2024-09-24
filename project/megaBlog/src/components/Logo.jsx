import React from "react";

function Logo({width = "100px"}){

    return(
        <div> <img src="./logo.png"  width={40} className="rounded-full" alt="logo"  /></div>
    )
}

export default Logo