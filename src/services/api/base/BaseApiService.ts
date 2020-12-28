export abstract class BaseApiService {
    async postRequest(requestObject: any, apiLink: string): Promise<Response> {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        };
        return await fetch(apiLink, requestOptions)
    }
}