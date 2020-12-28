import React from "react";
import {BaseAppBar} from "./BaseAppBar";
import {useHistory} from "react-router-dom";

export const LoginAppBar = () => {
    const history = useHistory()

    return (
        <BaseAppBar
            title={'Login'}
            buttons={[
                {
                    text: 'Register',
                    onClickAction: () => history.push('/register')
                }
            ]}
        />
    )
}