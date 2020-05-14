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
        zipCode: ''
    }

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
                let lat = parseFloat(JSON.stringify(position.coords.latitude))
                let lng = parseFloat(JSON.stringify(position.coords.longitude))
                console.log(lat, lng)
                console.log(position)
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

    componentDidMount() {
        this.findCoordinates();
        fetch(`https://api.yelp.com/v3/businesses/matches/${this.state.zipCode}`)
            .then(resp => resp.json())
            .then(searchResults => this.setState({searchResults}))
    }

    render(){
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