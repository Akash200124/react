import React, { useState, useContext } from "react";
import UserContect from "../contex/UserContex";

function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    // this  is hook that is use to set the context 
    const {setuser} = useContext(UserContect)

    const handleSubmit = (e) => {
        e.preventDefault();
        setuser({username,password})
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="userName" />

            <input type="text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="password" />

            <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Login 