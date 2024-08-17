import React from "react";


import { Outlet } from "react-router-dom";
import Webpage from "../Webpage";

function Layout(){
    return(
        <>
        <Webpage/>
        <Outlet/>
        </>
    )
}

export default Layout