import React from 'react';
import { AppRegistry, View, AsyncStorage } from 'react-native';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default class App extends React.Component {

  render(){
    return(
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="home" component={Home} initial={true}/>
    </Stack>
  </Router>
    )
  }
};

AppRegistry.registerComponent('App', () => App)