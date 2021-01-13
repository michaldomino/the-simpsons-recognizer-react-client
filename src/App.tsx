import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import "./App.css";
import {AuthenticationProvider} from "./context/authentication/producer";
import routes from "./config/routes";


function App() {


    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <Switch>
                    {routes}
                </Switch>
            </BrowserRouter>
        </AuthenticationProvider>
    );
}

export default App;
