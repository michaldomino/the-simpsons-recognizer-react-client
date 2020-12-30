import React from "react";
import {Controls} from "../../components/controls/Controls";
import {Button, Grid} from "@material-ui/core";

interface IHomeContainerProps {
    handleSubmit: any
    onSubmit: () => Promise<void>
    handleUploadClick: (event: any) => void
    image: File | undefined
    prediction: string
}

export const HomeContainer: React.FC<IHomeContainerProps> = (props) => {
    const {handleSubmit, onSubmit, handleUploadClick, image, prediction} = props

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

            <Grid item>
                <h1>
                    {prediction}
                </h1>
            </Grid>
        </Grid>
    )
}