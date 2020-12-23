import React from "react";
import {LoginData} from "../../models/LoginData";
import {Controls} from "../../components/controls/Controls";
import {Grid} from "@material-ui/core";

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
            <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <Controls.AppTextField
                        inputRef={props.register}
                        name='username'
                        label='Username'
                        error={props.usernameErrors !== ''}
                        helperText={props.usernameErrors}
                    />
                </Grid>

                <Grid item>
                <Controls.AppTextField
                    inputRef={props.register}
                    name='password'
                    label='Password'
                    type='password'
                    error={props.passwordErrors !== ''}
                    helperText={props.passwordErrors}
                />
                </Grid>
                    <Grid item>
                <Controls.AppTextField
                    inputRef={props.register}
                    name='password2'
                    label='Confirm password'
                    type='password'
                    error={props.password2Errors !== ''}
                    helperText={props.password2Errors}
                />
                    </Grid>

                        <Grid item>
                <Controls.AppButton text='Submit' type='submit'/>
                        </Grid>
            </Grid>
        </form>
    )
}