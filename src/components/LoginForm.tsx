import React from "react";
import {useForm} from "react-hook-form";
import {Token} from "../models/responses/Token";
import {useAuthenticationDispatch, useAuthenticationState} from "../context/authentication/producer";

interface LoginData {
    username: string
    password: string
}

export const LoginForm: React.FC = () => {
    const {register, handleSubmit} = useForm()
    const dispatch = useAuthenticationDispatch()
    const authenticationState = useAuthenticationState()

    const onSubmit = async (loginData: LoginData) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password
                }
            )
        };
        dispatch({type: 'REQUEST_LOGIN'})
        const response = await fetch('http://localhost:8000/authentication/api/login', requestOptions)
        if (response.status === 200) {
            console.log(response.statusText)
            const loginResponse = await response.json() as Token
            console.log(`Refresh token: ${loginResponse.refresh}`)
            console.log(`Access token: ${loginResponse.access}`)
            dispatch({type: 'LOGIN_SUCCESS', payload: loginResponse})
        }
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