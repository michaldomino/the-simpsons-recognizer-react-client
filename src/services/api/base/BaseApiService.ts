export abstract class BaseApiService {

    protected static readonly BASE_API_LINK = 'http://localhost:8000'

    protected async postJsonRequest(requestObject: any, apiLink: string): Promise<Response> {
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