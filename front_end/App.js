import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Login from './pages/Login'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key = "login" component = {Login} title = "Login" initial = {true}/>
        <Scene key = "signup" component = {SignUp} title = "Sign Up"/>
      </Scene>
    </Router>
  );
}