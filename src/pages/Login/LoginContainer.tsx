import {TextField} from "@material-ui/core";
import React from "react";
import {LoginData} from "../../models/LoginData";

interface ILoginContainerProps {
    handleSubmit: any,
    onSubmit: (loginData: LoginData) => Promise<void>,
    register: any,
    usernameErrors: string,
    passwordErrors: string,
    password2Errors: string
}

export const LoginContainer = (props: ILoginContainerProps) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <TextField
                inputRef={props.register}
                name='username'
                placeholder='Username'
                error={props.usernameErrors !== ''}
                helperText={props.usernameErrors}
            />
            <br/>
            <TextField
                inputRef={props.register}
                name='password'
                placeholder='Password'
                type='password'
                error={props.passwordErrors !== ''}
                helperText={props.passwordErrors}
            />
            <br/>
            <TextField
                inputRef={props.register}
                name='password2'
                placeholder='Confirm password'
                type='password'
                error={props.password2Errors !== ''}
                helperText={props.password2Errors}
            />
            <br/>
            <button>Submit</button>
        </form>
    )
}