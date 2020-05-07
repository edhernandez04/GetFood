import React from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {

    render(){
        return(
        <View>
            <View style={styles.restCategory}>
                <ScrollView horizontal={true}>
                    <Button title={'Fast Food'}/>
                    <Button title={'American'}/>
                    <Button title={'Chicken'}/>
                    <Button title={'Breakfast'}/>
                    <Button title={'Sandwiches'}/>
                    <Button title={'Healthy'}/>
                    <Button title={'Mexican'}/>
                    <Button title={'Pizza'}/>
                    <Button title={'Chinese'}/>
                    <Button title={'Seafood'}/>
                    <Button title={'Kosher'}/>
                    <Button title={'Jamaican'}/>
                    <Button title={'Indian'}/>
                    <Button title={'Asian'}/>
                </ScrollView>
            </View>
            <View style={styles.recentOrders}>
                <Text>Recent Places You Ordered From</Text>
                <Image style={styles.recentRest} source={{uri: 'https://www.ahstatic.com/photos/1146_rsr003_00_p_1024x768.jpg'}}/>
            </View>
            <View style={styles.suggestedPlaces}>
                <Text>Check these places out</Text>
                <Image style={styles.suggestedRest} source={{uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    restCategory: {
        flexDirection: 'row'
    },
    recentOrders: {
        alignItems: "center",
        padding: 25
    },
    recentRest: {
        height: 200,
        width: 200
    },
    suggestedPlaces: {
        alignItems: "center",
        padding: 25
    },
    suggestedRest: {
        height: 200,
        width: 200        
    }
})