import React from "react";
import {useForm} from "react-hook-form";
import {LoginResponse} from "../models/responses/LoginResponse";

interface LoginData {
    username: string
    password: string
}

export const LoginForm: React.FC = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = async (data: LoginData) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    username: data.username,
                    password: data.password
                }
            )
        };
        const response = await fetch('http://localhost:8000/authentication/api/login', requestOptions)
        console.log(response.statusText)
        const loginResponse = await response.json() as LoginResponse
        console.log(`Refresh token: ${loginResponse.refresh}`)
        console.log(`Access token: ${loginResponse.access}`)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input ref={register} name="username"/>
            <br/>
            <label>Password</label>
            <input ref={register} name="password" type="password"/>
            <br/>
            <button>Submit</button>
        </form>
    )
}