import React from "react";
import {BaseAppBar} from "./BaseAppBar";

export const RegisterAppBar = () => {
    return (
        <BaseAppBar
            title={'Register'}
            buttons={[
                {
                    text: 'Login',
                    onClickAction: () => console.log('Login clicked')
                }
            ]}
        />
    )
}