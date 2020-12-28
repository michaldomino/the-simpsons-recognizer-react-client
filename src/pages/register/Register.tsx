import React, {useState} from "react";
import {RegisterContainer} from "./RegisterContainer";
import {useForm} from "react-hook-form";

export const Register: React.FC = () => {
    const {register, handleSubmit, getValues} = useForm()
    const [usernameErrors, setUsernameErrors] = useState('')
    const [emailErrors, setEmailErrors] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')
    const [password2Errors, setPassword2Errors] = useState('')

    const onSubmit = async (registerData:any) => {}

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

