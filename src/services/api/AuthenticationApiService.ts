import {LoginData} from "../../models/LoginData";
import {RegisterData} from "../../models/RegisterData";
import {BaseApiService} from "./base/BaseApiService";

export class AuthenticationApiService extends BaseApiService {

    private static readonly AUTHENTICATION_API_LINK: string =  `${BaseApiService.BASE_API_LINK}/authentication/api`

    async login(loginData: LoginData): Promise<Response> {
        return this.postJsonRequest(
            {
                username: loginData.username,
                password: loginData.password
            },
            `${AuthenticationApiService.AUTHENTICATION_API_LINK}/login`
        )
    }

    async register(registerData: RegisterData): Promise<Response> {
        return this.postJsonRequest(
            {
                username: registerData.username,
                email: registerData.email,
                password: registerData.password
            },
            `${AuthenticationApiService.AUTHENTICATION_API_LINK}/register`
        )
    }
}