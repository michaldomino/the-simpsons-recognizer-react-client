import {Login} from "../pages/login/Login";
import {Register} from "../pages/register/Register";
import {Route} from "react-router-dom";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import {Home} from "../pages/home/Home";

const routes = [
    <Route exact path={'/login'} component={Login}/>,
    <Route exact path={'/register'} component={Register}/>,
    <ProtectedRoute exact path={'/'} component={Home}/>
]

export default routes
