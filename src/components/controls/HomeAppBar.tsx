import React from "react";
import {BaseAppBar} from "./BaseAppBar";
import {useAuthenticationDispatch} from "../../context/authentication/producer";

export const HomeAppBar: React.FC = () => {
    const dispatch = useAuthenticationDispatch()

    return (
        <BaseAppBar
            title={'The Simpsons Recognizer'}
            buttons={[
                {
                    text: 'Logout',
                    onClickAction: () => dispatch({type: 'LOGOUT'})
                }
            ]}
        />
    )
}