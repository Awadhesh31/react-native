import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";


export default class App extends React.Component {
  render() {
    return (
        <Router>
            <Scene key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login" initial={true}/>
                <Scene key="signup" component={SignUp} title="SignUp"/>
            </Scene>
        </Router>
    );
  }
}
