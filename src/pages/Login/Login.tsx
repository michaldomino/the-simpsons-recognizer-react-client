import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Token} from "../../models/responses/Token";
import {useAuthenticationDispatch} from "../../context/authentication/producer";
import {LoginData} from "../../models/LoginData";
import {AuthenticationService} from "../../services/AuthenticationService";
import {LoginBadResponse} from "../../models/responses/LoginBadResponse";
import {LoginContainer} from "./LoginContainer";


export const Login: React.FC = () => {
    const {register, handleSubmit, getValues} = useForm()
    const [usernameErrors, setUsernameErrors] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')
    const [password2Errors, setPassword2Errors] = useState('')
    const dispatch = useAuthenticationDispatch()

    const onSubmit = async (loginData: LoginData) => {
        try {
            console.log(loginData)
            dispatch({type: "REQUEST_LOGIN"})
            const {password, password2} = getValues(['password', 'password2'])
            if (password !== password2) {
                dispatch({type: 'LOGIN_ERROR'})
                setPassword2Errors('Passwords do not match')
                return
            }
            const authenticationService = new AuthenticationService()
            const response = await authenticationService.login(loginData)
            const loginResponse = await response.json()
            console.log(loginResponse)
            if (response.status === 200) {
                dispatch({type: 'LOGIN_SUCCESS', payload: loginResponse as Token})
                return
            }
            dispatch({type: 'LOGIN_ERROR'})
            if (response.status === 400) {
                const loginBadResponse = loginResponse as LoginBadResponse
                if (loginBadResponse.username) {
                    setUsernameErrors(loginBadResponse.username.join(' '))
                }
                if (loginBadResponse.password) {
                    setPasswordErrors(loginBadResponse.password.join(' '))
                }
                return
            }
        } catch {
            dispatch({type: 'LOGIN_ERROR'})
        }
    }

    return (
        <LoginContainer
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            usernameErrors={usernameErrors}
            passwordErrors={passwordErrors}
            password2Errors={password2Errors}
        />
    )
}