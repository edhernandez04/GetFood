import React from 'react';
import { connect } from 'react-redux'
import Routes from '../shared/routes.js'
import { findLatitude, findLongitude, findZipCode } from '../shared/actions.js'

class App extends React.Component {

  render() {
    return (
        <Routes />
    )
  }

}

const mapStateToProps = state => {
  return {
    currLatitude: state.currLatitude,
    currLongitude: state.currLongitude,
    zipCode: state.zipCode,
    searchParams: state.searchParams,
    bizResults: state.bizResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findLatitude: () => { dispatch(findLatitude()) },
    findLongitude: () => { dispatch(findLongitude()) },
    findZipCode: () => { dipatch(findZipCode()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);