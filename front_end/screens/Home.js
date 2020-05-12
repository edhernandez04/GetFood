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
        suggestedPlaces: []
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
                <Card>
                    <Image style={styles.recentRest} source={{uri: 'https://www.ahstatic.com/photos/1146_rsr003_00_p_1024x768.jpg'}}/>
                    <View style={styles.restInfo}>
                        <Text>$$$</Text>
                        <Text>Restaurant 1</Text>
                        <Text>+ + + +</Text>
                    </View>
                </Card>
            </View>

            <View>
                <Card>
                    <Image style={styles.suggestedRest} source={{uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>
                    <View style={styles.restInfo}>
                        <Text>$</Text>
                        <Text>Restaurant 2</Text>
                        <Text>+ + +</Text>
                    </View>
                </Card>
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