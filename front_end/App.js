import React from 'react';
import Provider, { connect } from 'react-redux'
import { createStore } from 'redux'
import { registerRootComponent } from 'expo'
import Routes from './shared/routes.js'
import reducer from './shared/reducer.js'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }

}

const store = createStore( reducer )

mapStateToProps = (state) => {
  return {
    currLatitude: state.currLatitude,
    currLongitude: state.currLongitude,
    zipCode: state.zipCode,
    searchParams: state.searchParams,
    bizResults: state.bizResults
  }
}

mapDispatchToProps = (dispatch) => {
  return { 
      findCoordinates : () => dispatch({type: 'findCoordinates'}),
      findZipCode : () => dispatch({type : 'findZipCode'})
  }
}

export default connect(mapStateToProps)(App)
registerRootComponent(App);