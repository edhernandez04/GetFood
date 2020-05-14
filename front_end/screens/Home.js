import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from '../shared/card.js'
import FoodTile from '../shared/foodTiles.js'
import SearchBar from '../shared/searchBar.js'

export default class Home extends React.Component {

    state = {
        searchResults: [],
        currLatitude: 0,
        currLongitude: 0,
        zipCode: 0
    }

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
                this.setState({currLatitude: parseFloat(JSON.stringify(position.coords.latitude))})
                this.setState({currLongitude: parseFloat(JSON.stringify(position.coords.longitude))})
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true }
        )
    }

    zipCodeFetch = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currLatitude},${this.state.currLongitude}&key=AIzaSyCiZESTsWLPZXB4A9giVO_F4Lz0dJB2OKM`)
            .then(resp => resp.json())
            .then(locations => this.setState({zipCode: parseInt(locations.results[0].address_components[7].long_name)}))
    }

    businessSearchFetch = () => {
        fetch(`https://api.yelp.com/v3/businesses/search?limit=10&location=${this.state.zipCode}`)
            .then(resp => resp.json())
            .then(searchResults => this.setState({searchResults}))
    }

    componentDidMount() {
        this.findCoordinates()
    }

    // if (this.state.currLatitude != 0 && this.state.currLongitude != 0) this.zipCodeFetch() 

    render(){
        console.log(this.state)
        return(
        <View>

            <View style={styles.restCategory}>
                <FoodTile />
            </View>

            <View>
                <SearchBar />
            </View>

            <View>
                <Card results={this.state.searchResults}/>
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    restCategory: {
        flexDirection: 'row'
    },
    recentRest: {
        height: 200
    },
    suggestedRest: {
        height: 200      
    },
    restInfo:{  
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    }
})