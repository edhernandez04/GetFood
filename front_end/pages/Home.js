import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {

    render(){
        return(
            <View style={styles.restCategory}>
                <Button>Fast Food</Button>
                <Button>American</Button>
                <Button>Chicken</Button>
                <Button>Breakfast</Button>
                <Button>Sandwiches</Button>
                <Button>Healthy</Button>
                <Button>Mexican</Button>
                <Button>Pizza</Button>
                <Button>Chinese</Button>
                <Button>Seafood</Button>
                <Button>Kosher</Button>
                <Button>Jamaican</Button>
                <Button>Indian</Button>
                <Button>Asian</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    restCategory: {
        flex: 1,
        flexDirection: 'row'
    }
})