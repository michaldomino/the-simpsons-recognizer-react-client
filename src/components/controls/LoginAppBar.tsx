import React from "react";
import {BaseAppBar} from "./BaseAppBar";

export const LoginAppBar = () => {
    return (
        <BaseAppBar
            title={'Login'}
            buttons={[
                {
                    text: 'Register',
                    onClickAction: () => console.log('Register clicked')
                }
            ]}
        />
    )
}