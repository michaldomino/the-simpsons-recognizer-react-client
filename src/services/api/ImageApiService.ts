import {BaseApiService} from "./base/BaseApiService";

export class ImageApiService extends BaseApiService {

    private static readonly IMAGE_API_LINK = `${BaseApiService.BASE_API_LINK}/image/api`

    async predict(image: File, accessToken: string) {

        const formData = new FormData()
        formData.append('image', image)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: formData
        };
        return fetch(`${ImageApiService.IMAGE_API_LINK}/predict`, requestOptions)
    }
}