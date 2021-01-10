import React from "react";
import {Controls} from "../../components/controls/Controls";
import {Grid, Snackbar} from "@material-ui/core";
import {RegisterData} from "../../models/RegisterData";
import {Alert} from "@material-ui/lab";

interface IRegisterContainerProps {
    handleSubmit: any,
    onSubmit: (registerData: RegisterData) => Promise<void>,
    register: any,
    usernameErrors: string,
    emailErrors: string,
    passwordErrors: string,
    password2Errors: string,
    registerSuccess: boolean
    handleSnackbarClose: (event?: React.SyntheticEvent, reason?: string) => void
}

export const RegisterContainer: React.FC<IRegisterContainerProps> = (props) => {
    const {
        handleSubmit,
        onSubmit,
        register,
        usernameErrors,
        emailErrors,
        passwordErrors,
        password2Errors,
        registerSuccess,
        handleSnackbarClose
    } = props

    return (
        <div>
            <Controls.RegisterAppBar/>
            <Snackbar open={registerSuccess} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert variant='filled' severity='success'>
                    Successfully created an account!
                </Alert>
            </Snackbar>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container
                      justify='center'
                      direction='column'
                      alignItems="center"
                      spacing={2}
                      style={{width:'100%'}}
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
                        <Controls.AppButton type='submit'>
                            Submit
                        </Controls.AppButton>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}