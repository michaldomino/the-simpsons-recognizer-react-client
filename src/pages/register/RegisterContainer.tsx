import React from "react";
import {Controls} from "../../components/controls/Controls";
import {Grid} from "@material-ui/core";
import {LoginData} from "../../models/LoginData";

interface IRegisterContainerProps {
    handleSubmit: any,
    onSubmit: (loginData: LoginData) => Promise<void>,
    register: any,
    usernameErrors: string,
    emailErrors: string,
    passwordErrors: string,
    password2Errors: string,
}

export const RegisterContainer: React.FC<IRegisterContainerProps> = (props) => {
    const {handleSubmit, onSubmit, register, usernameErrors, emailErrors, passwordErrors, password2Errors} = props

    return (
        <div>
            <Controls.LoginAppBar/>
            <br/>
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
                                name='email'
                                label='E-mail'
                                error={emailErrors !== ''}
                                helperText={emailErrors}
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
                            <Controls.AppButton text='Submit' type='submit'/>
                        </Grid>
                    </Grid>
                </form>
        </div>
    )
}