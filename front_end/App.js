import React from 'react';
import { AppRegistry} from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'

export default class App extends React.Component {

  render(){
    return(
      <Router>

        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="register" component={Register} title="Register" />
          <Scene key="home" component={Home} title="GetFood" initial={true} />
        </Stack>

      </Router>
    )
  }

};

AppRegistry.registerComponent('App', () => App)