import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

export default Card = props => {
    return (
        <View style={styles.card} >
            <View style={styles.cardContent} >
                <Image source={{uri: props.business.image_url}} style={styles.picture}/>
                <Text>{props.business.name}</Text>
                <Text>{props.business.phone}</Text>
                <Text>{props.business.price}</Text>
                <Text>{props.business.rating}</Text>
                <Text>{props.business.is_closed}</Text>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 20, height: 25},
        shadowColor: 'black',
        margin: 10
    },
    cardContent: {
        padding: 10
    },
    picture: {
        width: 440,
        height: 200,
        borderRadius: 5,
        justifyContent: 'space-around'
    }
})