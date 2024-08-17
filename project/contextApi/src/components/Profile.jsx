import React, { useContext } from "react";
import UserContect from "../contex/UserContex";

function Profile() {

    const {user} = useContext(UserContect)

    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile