import {TextField, TextFieldProps} from "@material-ui/core";
import React from "react";

interface IAppTextFieldProps {
    variant? : 'standard' | 'filled' | 'outlined' | undefined
}

export const AppTextField = (props: IAppTextFieldProps | TextFieldProps) => {
    const  {variant, ...other} = props

    return (
        <TextField
            variant={variant || 'outlined'}
            {...other}
        />
    )
}