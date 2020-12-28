import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
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
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
