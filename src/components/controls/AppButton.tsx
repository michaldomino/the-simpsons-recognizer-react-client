import {Button, ButtonProps} from "@material-ui/core";
import React from "react";

interface IAppButtonProps {
    variant?: 'text' | 'outlined' | 'contained' | undefined
}

export const AppButton = (props: IAppButtonProps | ButtonProps) => {
    const {variant, ...rest} = props as any
    return (
        <Button
            variant={variant || 'contained'}
            color='primary'
            {...rest}
        />
    )
}