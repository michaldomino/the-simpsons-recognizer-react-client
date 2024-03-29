import {Token} from "../../models/responses/Token";

export interface IAuthenticationState {
    accessToken: string
    isLoggedIn: boolean
    isLoading: boolean
}

export const initialState: IAuthenticationState = {
    accessToken: '',
    isLoading: false,
    isLoggedIn: false,
};

export type AuthenticationAction =
    { type: 'REQUEST_LOGIN' }
    | { type: 'LOGIN_SUCCESS', payload: Token }
    | { type: 'LOGOUT' }
    | { type: 'LOGIN_ERROR' }

export function authenticationReducer(previousState: IAuthenticationState, action: AuthenticationAction): IAuthenticationState {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            console.log(JSON.stringify(previousState))
            return {
                ...previousState,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            console.log(JSON.stringify(previousState))
            return {
                ...previousState,
                isLoading: false,
                isLoggedIn: true,
                accessToken: action.payload.access
            }
        case 'LOGOUT':
            return initialState
        case "LOGIN_ERROR":
            return {
                ...previousState,
                isLoading: false
            }
    }
}
