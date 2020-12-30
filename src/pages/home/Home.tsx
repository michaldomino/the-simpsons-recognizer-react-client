import React, {useState} from "react";
import {HomeContainer} from "./HomeContainer";
import {useForm} from "react-hook-form";
import {LoginContainer} from "../login/LoginContainer";
import {Controls} from "../../components/controls/Controls";
import {Button, ButtonBase, Grid, makeStyles} from "@material-ui/core";

export const Home: React.FC = () => {
    const {handleSubmit} = useForm()
    const [image, setImage] = useState<File>()

    const onSubmit = async () => {
        if (image) {
            const formData = new FormData()
            formData.append('image', image)
            const requestOptions = {
                method: 'POST',
                body: formData
            };
            const response = await fetch('http://localhost:8000/image/api/predict', requestOptions)
            const responseData = await response.json()
            console.log(responseData)
        }
    }

    const handleUploadClick = (event: any) => {
        const file: File = event.target.files[0]
        setImage(file)
    }

    return (
        <Grid container
              spacing={2}
              direction='column'
        >

            <Grid item>
                <input
                    accept="image/*"
                    style={{display: 'none'}}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={handleUploadClick}
                />
                <label htmlFor="raised-button-file">
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                    >
                        Upload image
                    </Button>
                </label>
                <label>
                    {image?.name}
                </label>
            </Grid>

            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controls.AppButton
                        type='submit'
                        disabled={image === undefined}
                    >
                        Submit
                    </Controls.AppButton>
                </form>
            </Grid>
        </Grid>
    )
}