import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import axios from 'axios'

export default class SearchBar extends React.Component{
    
   state = {
      searchParams: '',
      bizResults: []
   }

    config = {
        headers: {
            Authorization: 'Bearer vAkWYC6AXF6znx1BJu2dkzt41cKzZSUHLtzQ8bI9nif1NDiJCXO1JWoAcqqG6uELscgKna3Ho76oDHMWWiRoleTJNUMdRsh2kJRYJfHmKvHZRdQZw9angcEwVJW5XnYx',
        },
        params: {
            term: this.state.searchParams, 
            radius: 4025, 
            latitude: this.props.latitude, 
            longitude: this.props.longitude, 
            sort_by: "distance"
        }
    }

    fetchBusinessResults = () => {
        axios.get('https://api.yelp.com/v3/businesses/search', this.config)
        .then(bizResults => this.setState({bizResults:bizResults.data.businesses}))
    }

    resultHandler = () => {
        this.props.searchResults(this.state.bizResults)
    }

    handleChange = (text) => {
        this.setState({ searchParams: text })
    }
   
   render(){
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
                placeholder = "Find Food Places"
                autoCapitalize = "none"
                onChangeText = {this.handleChange}
                onSubmitEditing={this.fetchBusinessResults}/>
        </View>
    )}
}

const styles = StyleSheet.create({
   container: {
    height: 50,
    borderRadius: 5,
    elevation: 10,
    backgroundColor: 'white',
    shadowOffset: {width: 25, height: 25},
    shadowColor: 'black',
    margin: 10,
    padding: 10
   }
})