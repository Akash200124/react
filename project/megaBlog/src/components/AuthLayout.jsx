import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function Protected({ childern, authentication = true }) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStaus = useSelector(state => state.auth.status);

    useEffect(() => {
        if (authentication && authStaus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStaus !== authentication) {
            navigate("/")
        }
        setLoader(false);

    }, [authStaus, navigate, authentication])

    return loader ? <h1>Loading ...</h1> : <>{childern}</>
}


