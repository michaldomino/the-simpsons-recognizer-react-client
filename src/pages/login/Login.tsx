import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Token} from "../../models/responses/Token";
import {useAuthenticationDispatch} from "../../context/authentication/producer";
import {LoginData} from "../../models/LoginData";
import {AuthenticationApiService} from "../../services/api/AuthenticationApiService";
import {LoginBadResponse} from "../../models/responses/LoginBadResponse";
import {LoginContainer} from "./LoginContainer";
import {LoginUnauthorizedResponse} from "../../models/responses/LoginUnauthorizedResponse";
import {useHistory} from "react-router-dom";


export const Login: React.FC = () => {
    const {register, handleSubmit} = useForm()
    const [usernameErrors, setUsernameErrors] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')
    const [formErrors, setFormErrors] = useState('')
    const dispatch = useAuthenticationDispatch()
    const history = useHistory()
    const authenticationService = new AuthenticationApiService()

    const onSubmit = async (loginData: LoginData) => {
        try {
            setUsernameErrors('')
            setPasswordErrors('')
            dispatch({type: 'REQUEST_LOGIN'})
            const response = await authenticationService.login(loginData)
            const loginResponse = await response.json()
            console.log(loginResponse)
            switch (response.status) {
                case 200:
                    dispatch({type: 'LOGIN_SUCCESS', payload: loginResponse as Token})
                    history.push('/')
                    break
                case 400:
                    dispatch({type: 'LOGIN_ERROR'})
                    const loginBadResponse = loginResponse as LoginBadResponse
                    if (loginBadResponse.username) {
                        setUsernameErrors(loginBadResponse.username.join(' '))
                    }
                    if (loginBadResponse.password) {
                        setPasswordErrors(loginBadResponse.password.join(' '))
                    }
                    break
                case 401:
                    dispatch({type: 'LOGIN_ERROR'})
                    const loginUnauthenticatedResponse = loginResponse as LoginUnauthorizedResponse
                    setFormErrors(loginUnauthenticatedResponse.detail)
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
            formErrors={formErrors}
        />
    )
}