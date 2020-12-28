import {LoginData} from "../models/LoginData";

export class AuthenticationService {

    async login(loginData: LoginData): Promise<Response> {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password
                }
            )
        };
        return await fetch('http://localhost:8000/authentication/api/login', requestOptions)
    }
}