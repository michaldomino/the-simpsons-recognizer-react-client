import {Button, ButtonProps} from "@material-ui/core";
import React from "react";

interface IAppButtonProps {
    variant?: 'text' | 'outlined' | 'contained' | undefined
    text: string
}

export const AppButton = (props: IAppButtonProps | ButtonProps) => {
    const {text, variant, ...other} = props as any
    return (
        <Button
            variant={variant || 'contained'}
            color='primary'
            {...other}
        >
            {text}
        </Button>
    )
}