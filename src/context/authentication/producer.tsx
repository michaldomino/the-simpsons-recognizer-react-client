import React, {Dispatch, useReducer} from "react"
import {AuthenticationAction, authenticationReducer, initialState} from "./reducer"

const AuthenticationStateContext = React.createContext(initialState)
const AuthenticationDispatchContext = React.createContext({} as Dispatch<AuthenticationAction>)

export function useAuthenticationState() {
    const context = React.useContext(AuthenticationStateContext)
    if (context === undefined) {
        throw new Error('useAuthenticationState must be used within AuthenticationProvider')
    }
    return context
}

export function useAuthenticationDispatch() {
    const context = React.useContext(AuthenticationDispatchContext)
    if (context === undefined) {
        throw new Error('useAuthenticationDispatch must be used within AuthenticationProvider')
    }
    return context
}

export const AuthenticationProvider = ({children}: any) => {
    const [authenticationState, dispatch] = useReducer(authenticationReducer, initialState);

    return (
        <AuthenticationStateContext.Provider value={authenticationState}>
            <AuthenticationDispatchContext.Provider value={dispatch}>
                {children}
            </AuthenticationDispatchContext.Provider>
        </AuthenticationStateContext.Provider>
    )
}