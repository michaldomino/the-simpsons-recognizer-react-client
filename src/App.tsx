import React from 'react';
import './App.css';
import {Login} from "./pages/Login/Login";
import {AuthenticationProvider} from "./context/authentication/producer";
import {LoginAppBar} from "./components/controls/LoginAppBar";


function App() {


    return (
        <AuthenticationProvider>
            <LoginAppBar/>
            {/*<AppBar position='static'>*/}
            {/*    <Toolbar>*/}
            {/*        <Typography variant='h6'>*/}
            {/*            Login*/}
            {/*        </Typography>*/}
            {/*        <Controls.AppButton text={'Register'} />*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
            <Login/>
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
