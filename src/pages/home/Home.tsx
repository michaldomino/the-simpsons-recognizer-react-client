import React, {useState} from "react";
import {HomeContainer} from "./HomeContainer";
import {useForm} from "react-hook-form";
import {LoginContainer} from "../login/LoginContainer";
import {Controls} from "../../components/controls/Controls";
import {Button, ButtonBase, makeStyles} from "@material-ui/core";

export const Home: React.FC = () => {
    const {register, handleSubmit} = useForm()
    const [response, setResponse] = useState('')

    const onSubmit = async (data: any) => {
        console.log('inSubmit')
    }
    // const handleUploadClick = (event: React.MouseEvent<HTMLElement>) => {
    //     console.log();
    //     var file = event.target.files[0];
    //     const reader = new FileReader();
    //     var url = reader.readAsDataURL(file);
    //
    //     // reader.onloadend = function(e) {
    //     //     this.setState({
    //     //         selectedFile: [reader.result]
    //     //     });
    //     // }
    //     console.log(url) // Would see a path?
    //
    //     // this.setState({
    //     //     mainState: "uploaded",
    //     //     selectedFile: event.target.files[0],
    //     //     imageUploaded: 1
    //     // })
    // }
    const handleUploadClick = async (event: any) => {
        console.log('in')
        // console.log(event)
        const file: File = event.target.files[0];
        const reader = new FileReader();
        // const url = reader.readAsDataURL(file);
        reader.readAsArrayBuffer(file)
        console.log(file.name)
        const data = new FormData()
        data.append('image', file)
        const requestOptions = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
            // },
            body: data
        };
        const response = await fetch('http://localhost:8000/image/api/predict', requestOptions)
        const responseData = await response.json()
        console.log(responseData)

        // reader.onloadend = function(e) {
        //     this.setState({
        //         selectedFile: [reader.result]
        //     });
        // }.bind(this);
        // console.log(url); // Would see a path?

        // this.setState({
        //     mainState: "uploaded",
        //     selectedFile: event.target.files[0],
        //     imageUploaded: 1
        // });
    };

    return (
        <div>
            <input
                accept="image/*"
                style={{display: 'none'}}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleUploadClick}
            />
            <label htmlFor="raised-button-file">
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
        </div>

    )
    // return (
    //     <form>
    //         <label>
    //             {response}
    //         </label>
    //         <input
    //             accept="image/*"
    //             // className={classes.input}
    //             hidden
    //             id="raised-button-file"
    //             multiple
    //             type="file"
    //             name="image"
    //             ref={register}
    //             onChange={handleUploadClick}
    //         />
    //         <label htmlFor="raised-button-file">
    //             <Button
    //                 // variant="raised"
    //                 component='span'
    //                 color='primary'
    //                 variant='contained'
    //                     // className={classes.button}
    //
    //             >
    //                 Upload
    //             </Button>
    //         </label>
    //     //
    //     //
    //     //     <input
    //     //         // accept="image/*"
    //     //         id="contained-button-file"
    //     //         multiple
    //     //         hidden
    //     //         type="file"
    //     //         onChange={handleUploadClick}
    //     //     />
    //     //     <label htmlFor="contained-button-file">
    //     //         <Button variant="contained" component="span">
    //     //             Choose files
    //     //         </Button>
    //     //     </label>
    //     //
    //     //     {/*<input*/}
    //     //     {/*    accept="image/*"*/}
    //     //     {/*  //  className={classes.input}*/}
    //     //     {/*    id="contained-button-file"*/}
    //     //     {/*    multiple*/}
    //     //     {/*    type="file"*/}
    //     //     {/*    onChange={handleUploadClick}*/}
    //     //     {/*/>*/}
    //     //
    //     //     {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
    //     //     {/*    <Controls.AppButton*/}
    //     //     {/*        variant='contained'*/}
    //     //     {/*        // type='submit'*/}
    //     //     {/*        containerElement='label'*/}
    //     //     {/*    >*/}
    //     //     {/*        Upload file*/}
    //     //     {/*        <input*/}
    //     //     {/*            accept="image/*"*/}
    //     //     {/*            //  className={classes.input}*/}
    //     //     {/*            id="contained-button-file"*/}
    //     //     {/*            hidden*/}
    //     //     {/*            type="file"*/}
    //     //     {/*            onChange={handleUploadClick}*/}
    //     //     {/*        />*/}
    //     //     {/*        /!*<input*!/*/}
    //     //     {/*        /!*    type='file'*!/*/}
    //     //     {/*        /!*    ref={register}*!/*/}
    //     //     {/*        /!*    hidden*!/*/}
    //     //     {/*/>*/}
    //     //     {/*    </Controls.AppButton>*/}
    //     //     {/*</form>*/}
    //     </form>
    // )

    // return (
    //     <HomeContainer
    //         handleSubmit={handleSubmit}
    //         onSubmit={onSubmit}
    //         register={register}
    //         response={response}
    //     />
    // )
}