import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from '../shared/card.js'
import FoodTile from '../shared/foodTiles.js'
import SearchBar from '../shared/searchBar.js'

export default class Home extends React.Component {

    state = {
        searchResults: [],
        recentOrders: [],
        suggestedPlaces: [],
        locations: [],
        currLatitude: 0,
        currLongitude: 0
    }

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
                this.setState({currLatitude: parseFloat(JSON.stringify(position.coords.latitude))})
                this.setState({currLongitude: parseFloat(JSON.stringify(position.coords.longitude))})
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
    };

    zipCodeFetch = () => {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currLongitude},${this.state.currLatitude}&key=AIzaSyCiZESTsWLPZXB4A9giVO_F4Lz0dJB2OKM`)
                .then(resp => resp.json())
                .then(locations => console.log(locations))
    }

    componentDidMount() {
        this.findCoordinates();
    }

    render(){
        if (this.state.currLatitude != 0 && this.state.currLongitude != 0){
            this.zipCodeFetch()
        }
        return(
        <View>

            <View style={styles.restCategory}>
                <FoodTile />
            </View>

            <View>
                <SearchBar />
            </View>

            <View>
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