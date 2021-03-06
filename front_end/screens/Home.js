import React from 'react'
import { StyleSheet, View, TextInput, ScrollView, Image } from 'react-native';
import Card from '../shared/card.js'
import FoodTile from '../shared/foodTiles.js'
import axios from 'axios'

class Home extends React.Component {

    state = {
        zipCode: 0,
        location: {
            currLatitude: 0,
            currLongitude: 0
        },
        bizResults: [],
        searchParams: '',
        loading: false
    }

    componentDidMount(){
        this.findCoordinates()
    }

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ location: {
                        currLatitude: parseFloat(JSON.stringify(position.coords.latitude)),
                        currLongitude: parseFloat(JSON.stringify(position.coords.longitude))
                    }
                })
            },
                error => Alert.alert(error.message),   
                { enableHighAccuracy: true }
        )
    }
    
    findZipCode = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.location.currLatitude},${this.state.location.currLongitude}&key=AIzaSyCiZESTsWLPZXB4A9giVO_F4Lz0dJB2OKM`)
        .then(resp => resp.json())
            .then( location => this.setState({ zipCode: parseInt(location.results[0].address_components[7].long_name)}) )
            .then(this.fetchBusinessResults)
    }

    fetchBusinessResults = () => {
        this.setState({bizResults: []})
        const config = {
            headers: {
                Authorization: 'Bearer vAkWYC6AXF6znx1BJu2dkzt41cKzZSUHLtzQ8bI9nif1NDiJCXO1JWoAcqqG6uELscgKna3Ho76oDHMWWiRoleTJNUMdRsh2kJRYJfHmKvHZRdQZw9angcEwVJW5XnYx',
            },
            params: {
                term: this.state.searchParams, 
                radius: 4023,
                latitude: this.state.location.currLatitude,
                longitude: this.state.location.currLongitude,
                categories: "food",
                limit: 20
            }
        }
        axios.get('https://api.yelp.com/v3/businesses/search', config)
            .then( bizResults => this.setState({ bizResults: bizResults.data.businesses }) )
    }

    handleChange = text => {
        this.setState({ searchParams: text })
    }

    foodTilePress = async (term) => {
        await this.setState({ searchParams: term})
        this.fetchBusinessResults()
    }

    render(){
        if ((this.state.location.currLatitude !== 0) && !this.state.zipCode) this.findZipCode()
        return(
                <View style={styles.parentTainer}>
                    <View style={styles.restCategory}>
                        <FoodTile foodTilePress={this.foodTilePress}/>
                    </View>
                    <ScrollView>
                        <View style = {styles.container}>
                            <Image style={styles.searchGlass} source={require('../assets/searchGlass.png')} />
                            <TextInput
                                placeholder = "Find Food Places"
                                autoCapitalize = "none"
                                onChangeText = {this.handleChange}
                                onSubmitEditing={this.fetchBusinessResults}/>
                        </View>
                        <View>
                            {this.state.bizResults.map( business => {
                                return <Card key={business.id} business={business}/>
                            })}
                        </View>
                    </ScrollView>
                </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    parentTainer: {
        flex: 1
    },
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
    },
    searchGlass: {
        height: 25,
        width: 25,
        marginRight: 8
    },
    container: {
        height: 50,
        borderRadius: 5,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 25, height: 25},
        shadowColor: 'black',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
       }
})