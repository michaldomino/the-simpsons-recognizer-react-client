import React from "react";
import {useForm} from "react-hook-form";

interface LoginData {
    username: string
    password: string
}

export const LoginForm: React.FC = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data:LoginData) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input ref={register} name="username" />
            <label>Password</label>
            <input ref={register} name="password" type="password"/>
            <button>Submit</button>
        </form>
    )
}