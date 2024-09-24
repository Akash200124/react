import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Container, Input, Logo } from './index';
import { useDispatch } from "react-redux";
// import { AuthService } from "../appwrite/auth";
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'


function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        try {
            // console.log(data)
            const session = await authService.login(data);

            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    console.log(authLogin(userData),'userdata')
                    dispatch(authLogin(userData.payload));
                    // by use of navigate the user can go on next page without click programtically 
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message   );
        }
    }

    return (
        <div className="flex items-center justify-center w-full ">
            <div className={`mx-auto w-1/2 max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`} >
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <img src="./logo.png" alt="logo" />
                        {/* <Logo width="100%" /> */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary trasition all duration-200 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            </div>
            <div className="w-1/3 ">
            <form onSubmit={handleSubmit(login)}
                className="mt-8"
            >
                <div className="space-y-5 w-full">
                    <Input
                        label="Email:"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            require: true,
                            validate: {
                                matchPatern: (value) =>
                                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                    "Email address must be a valid address"
                            }
                        })}
                    >
                    </Input>
                    <Input
                        label="password"
                        type="password"
                        placeholder="Enter Your password"
                        {...register("password", {
                            require: true,
                        })}
                    >
                    </Input>

                    <button type="submit" className="w-full bg-blue-400 rounded-md py-2">Sign in </button>
                    {/* <Button
                        type="submit"
                        className="w-full"
                    ></Button> */}
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login