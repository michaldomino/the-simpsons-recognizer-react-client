import {Login} from "../pages/login/Login";
import {Register} from "../pages/register/Register";
import {Route} from "react-router-dom";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const routes = [
    <Route exact path={'/login'} component={Login}/>,
    <ProtectedRoute exact path={'/register'} component={Register}/>
]

export default routes
