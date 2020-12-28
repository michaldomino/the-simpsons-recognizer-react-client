import {LoginData} from "../../models/LoginData";
import {RegisterData} from "../../models/RegisterData";
import {BaseApiService} from "./base/BaseApiService";

export class AuthenticationApiService extends BaseApiService {

    private BASE_API_LINK: string = 'http://localhost:8000/authentication/api'

    async login(loginData: LoginData): Promise<Response> {
        return this.postRequest(
            {
                username: loginData.username,
                password: loginData.password
            },
            `${this.BASE_API_LINK}/login`
        )
    }

    async register(registerData: RegisterData): Promise<Response> {
        return this.postRequest(
            {
                username: registerData.username,
                email: registerData.email,
                password: registerData.password
            },
            `${this.BASE_API_LINK}/register`
        )
    }
}