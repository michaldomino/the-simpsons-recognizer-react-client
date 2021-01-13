import React, {useState} from "react";
import {HomeContainer} from "./HomeContainer";
import {useForm} from "react-hook-form";
import {PredictionResponse} from "../../models/responses/PredictionResponse";
import {ImageApiService} from "../../services/api/ImageApiService";
import {useAuthenticationState} from "../../context/authentication/producer";

export const Home: React.FC = () => {
    const {handleSubmit} = useForm()
    const authenticationState = useAuthenticationState()
    const [image, setImage] = useState<File>()
    const [prediction, setPrediction] = useState('')
    const imageApiService = new ImageApiService()

    const onSubmit = async () => {
        try {
            if (image) {
                setPrediction('...')
                const response = await imageApiService.predict(image, authenticationState.accessToken)
                const responseData = await response.json()
                switch (response.status) {
                    case 200:
                        const predictionResponse = responseData as PredictionResponse
                        setPrediction(predictionResponse.prediction)
                        break
                    default:
                        setPrediction('Something went wrong')
                        break
                }
            }
        } catch {
            setPrediction('Something went wrong')
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
            prediction={prediction}
        />
    )
}