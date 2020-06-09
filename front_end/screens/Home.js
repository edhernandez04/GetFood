import React from 'react'
import { StyleSheet, View} from 'react-native';
import Card from '../shared/card.js'
import FoodTile from '../shared/foodTiles.js'
import SearchBar from '../shared/searchBar.js'

class Home extends React.Component {

    render(){
        if ((this.props.currLatitude && this.props.currLongitude) && !this.props.zipCode) mapDispatchToProps(findZipCode) 
        return(
                <View>
                    <View style={styles.restCategory}>
                        <FoodTile />
                    </View>
                    <View>
                        <SearchBar
                            latitude={this.props.currLatitude} 
                            longitude={this.props.currLongitude}/>
                    </View>
                    <View>
                        <Card />
                    </View>
                </View>
        )
    }
}

export default Home

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