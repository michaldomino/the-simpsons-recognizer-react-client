import React from "react";
import {Redirect, Route, RouteProps} from "react-router";
import {useAuthenticationState} from "../context/authentication/producer";


const ProtectedRoute: React.FC<RouteProps> = (props) => {
    const authenticationState = useAuthenticationState()

    if (!authenticationState.isLoggedIn) {
        const renderComponent = () => <Redirect to={{pathname: '/login'}}/>;
        return <Route {...props} component={renderComponent} render={undefined}/>;
    }
    return <Route {...props} />;
}

export default ProtectedRoute