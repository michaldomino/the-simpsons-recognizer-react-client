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
    formErrors: string
}

export const LoginContainer = (props: ILoginContainerProps) => {
    const {handleSubmit, onSubmit, register, usernameErrors, passwordErrors, formErrors} = props

    return (
        <div>
            <Controls.LoginAppBar/>
            <br/>

            <Grid container justify='center'>
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
                                <FormHelperText>{formErrors}</FormHelperText>
                            </Grid>

                            <Grid item>
                                <Controls.AppButton type='submit'>
                                    Submit
                                </Controls.AppButton>
                            </Grid>
                        </Grid>
                    </form>
                </FormControl>
            </Grid>
        </div>
    )
}