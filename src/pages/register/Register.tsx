import React, {useState} from "react";
import {RegisterContainer} from "./RegisterContainer";
import {useForm} from "react-hook-form";
import {RegisterData} from "../../models/RegisterData";
import {AuthenticationApiService} from "../../services/api/AuthenticationApiService";
import {UserCreatedResponse} from "../../models/responses/UserCreatedResponse";
import {RegisterBadResponse} from "../../models/responses/RegisterBadResponse";

export const Register: React.FC = () => {
    const {register, handleSubmit, getValues} = useForm()
    const [usernameErrors, setUsernameErrors] = useState('')
    const [emailErrors, setEmailErrors] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')
    const [password2Errors, setPassword2Errors] = useState('')
    const authenticationService = new AuthenticationApiService()

    const onSubmit = async (registerData: RegisterData) => {
        setUsernameErrors('')
        setEmailErrors('')
        setPasswordErrors('')
        setPassword2Errors('')

        const {password, password2} = getValues(['password', 'password2'])
        if (password !== password2) {
            setPassword2Errors('Passwords do not match')
            return
        }

        const response = await authenticationService.register(registerData)
        const registerResponse = await response.json()
        switch (response.status) {
            case 201:
                console.log(registerResponse as UserCreatedResponse)
                break
            case 400:
                const registerBadResponse = registerResponse as RegisterBadResponse
                console.log(registerBadResponse)
                if (registerBadResponse.username) {
                    setUsernameErrors(registerBadResponse.username.join(' '))
                }
                if (registerBadResponse.email) {
                    setEmailErrors(registerBadResponse.email.join(' '))
                }
                if (registerBadResponse.password) {
                    setPasswordErrors(registerBadResponse.password.join(' '))
                }
                break
        }
    }

    return (
        <RegisterContainer
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            usernameErrors={usernameErrors}
            emailErrors={emailErrors}
            passwordErrors={passwordErrors}
            password2Errors={password2Errors}
        />
    )
}

