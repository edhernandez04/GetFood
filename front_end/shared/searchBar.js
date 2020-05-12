import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default class SearchBar extends React.Component{
   state = {
      searchParams: '',
      bizResults: []
   }

   handleChange = (text) => {
      this.setState({ searchParams: text })
   }

   search = (text) => {
       fetch(`https://api.yelp.com/v3/businesses/search`)
       .then(resp => resp.json())
       .then(bizResults => setState({bizResults})) 
   }
   
   render(){
    return (
        <View style = {styles.container}>
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Find Food Places"
            autoCapitalize = "none"
            onChangeText = {this.handleChange}/>
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