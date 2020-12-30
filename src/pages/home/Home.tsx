import React, {useState} from "react";
import {HomeContainer} from "./HomeContainer";
import {useForm} from "react-hook-form";

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
        <HomeContainer
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            handleUploadClick={handleUploadClick}
            image={image}
        />
    )
}