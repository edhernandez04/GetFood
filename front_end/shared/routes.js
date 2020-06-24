import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import BizShow from '../screens/BizShow'

const Routes = (props) => (
    <Router>

      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="home" component={Home} title="GetFood" initial={true} />
        <Scene key="show" component={BizShow} title="Restaurant" />
      </Stack>

    </Router>
)

export default Routes



