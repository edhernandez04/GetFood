import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux'
import Provider from 'react-redux'
import Home from './screens/Home.js'

const initialState = {
  currLatitude: null,
  currLongitude: null,
  zipCode: 0,
  searchParams: '',
  bizResults: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'findCoordinates' :
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({currLatitude: parseFloat(JSON.stringify(position.coords.latitude)), currLongitude: parseFloat(JSON.stringify(position.coords.longitude))})
        }, error => Alert.alert(error.message), { enableHighAccuracy: true }
      ) 
      break
    case 'findZipCode' :
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currLatitude},${this.state.currLongitude}&key=AIzaSyCiZESTsWLPZXB4A9giVO_F4Lz0dJB2OKM`)
        .then(resp => resp.json())
          .then(locations => this.setState({zipCode: parseInt(locations.results[0].address_components[7].long_name)}))
      break
    default:
      return state
  }
}

const store = createStore( reducer )

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
export default App

AppRegistry.registerComponent('App', () => App)