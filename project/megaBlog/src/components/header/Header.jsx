import React, { act } from "react";
import { Container, LogoutBtn, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createActionCreatorInvariantMiddleware } from "@reduxjs/toolkit";

function Header() {

    const authStatus = useSelector((state) =>(
        state.auth.status )
    )

    const navigate = useNavigate();

    const navItem = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: 'Signup',
            slug: "/signup",
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: 'Add Posts',
            slug: "/add-post",
            active: authStatus
        },
        {
            name:'Login',
            slug:"/login",
            active:!authStatus
        }
    ]
    return (

        <header className="py-3 shadow bg-gray-500 w-full">
            <Container>
           
                <nav className="flex">
                    <div className="mr-4">
                        <Link to='/'>
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItem.map((item) =>
                            item.active ?
                                (
                                    <li key={item.name}>
                                        <button
                                            className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                            onClick={() => navigate(item.slug)}
                                        >{item.name}</button>
                                    </li>
                                ) : null
                        )}

                        {/* if the authStatus is true then logout button will show  */}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}

                        {/* {!authStatus && (
                            <li>
                                
                            </li>
                        )} */}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}


export default Header 