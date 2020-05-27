import React from 'react';
import Provider, { connect } from 'react-redux'
import { createStore } from 'redux'
import { registerRootComponent } from 'expo'
import Routes from './shared/routes.js'
import reducer from './shared/reducer.js'
import { findLatitude, findLongitude, findZipCode } from './shared/actions.js'

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

mapDispatchToProps = {
  findLatitude,
  findLongitude,
  findZipCode
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
registerRootComponent(App);