import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    // a hook that is use to store the data of the loader whenever we are calling some api from the react-dom- router 

    const data = useLoaderData();


    // const [data,setdata] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/akash200124')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
    return(

        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/akash200124')
    return response.json()
}