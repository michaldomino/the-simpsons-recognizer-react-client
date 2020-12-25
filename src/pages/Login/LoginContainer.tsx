import React from "react";
import {LoginData} from "../../models/LoginData";
import {Controls} from "../../components/controls/Controls";
import {FormControl, FormHelperText, Grid} from "@material-ui/core";

interface ILoginContainerProps {
    handleSubmit: any,
    onSubmit: (loginData: LoginData) => Promise<void>,
    register: any,
    usernameErrors: string,
    passwordErrors: string,
    password2Errors: string,
    formErrors: string
}

export const LoginContainer = (props: ILoginContainerProps) => {
    const {handleSubmit, onSubmit, register, usernameErrors, passwordErrors, password2Errors, formErrors} = props

    return (
        <FormControl error={formErrors !== ''}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container
                      justify="center"
                      direction="column"
                      alignItems="center"
                      spacing={2}
                >
                    <Grid item>
                        <Controls.AppTextField
                            inputRef={register}
                            name='username'
                            label='Username'
                            error={usernameErrors !== ''}
                            helperText={usernameErrors}
                        />
                    </Grid>

                    <Grid item>
                        <Controls.AppTextField
                            inputRef={register}
                            name='password'
                            label='Password'
                            type='password'
                            error={passwordErrors !== ''}
                            helperText={passwordErrors}
                        />
                    </Grid>

                    <Grid item>
                        <Controls.AppTextField
                            inputRef={register}
                            name='password2'
                            label='Confirm password'
                            type='password'
                            error={password2Errors !== ''}
                            helperText={password2Errors}
                        />
                    </Grid>

                    <Grid item>
                        <FormHelperText>{formErrors}</FormHelperText>
                    </Grid>

                    <Grid item>
                        <Controls.AppButton text='Submit' type='submit'/>
                    </Grid>
                </Grid>
            </form>
        </FormControl>
    )
}