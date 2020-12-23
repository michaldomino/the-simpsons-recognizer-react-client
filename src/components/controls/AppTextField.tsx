import {TextField, TextFieldProps} from "@material-ui/core";
import React from "react";

interface IAppTextFieldProps {
}

export const AppTextField = (props: IAppTextFieldProps | TextFieldProps) => {
    const  {...other} = props

    return (
        <TextField
            variant='outlined'
            {...other}
        />
    )
}