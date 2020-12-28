import React from "react";
import {BaseAppBar} from "./BaseAppBar";
import {useHistory} from "react-router-dom";

export const RegisterAppBar = () => {
    const history = useHistory()

    return (
        <BaseAppBar
            title={'Register'}
            buttons={[
                {
                    text: 'Login',
                    onClickAction: () => history.push('/login')
                }
            ]}
        />
    )
}