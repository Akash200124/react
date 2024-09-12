import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Container, Input, Logo } from './index';
import { useDispatch } from "react-redux";
import { AuthService } from "../appwrite/auth";
import { useForm } from 'react-hook-form'


function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        try {
            const session = await AuthService.login(data)

            if (session) {
                const userData = await AuthService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData));
                    // by use of navigate the user can go on next page without click programtically 
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`} >
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
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
            <form onSubmit={handleSubmit(login)}
                className="mt-8"
            >
                <div className="space-y-5">
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
                    <Button
                        type="submit"
                        className="w-full"
                    >Sign in </Button>
                </div>
            </form>
        </div>
    )
}

export default Login