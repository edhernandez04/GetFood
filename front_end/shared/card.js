import React from 'react'
import { StyleSheet, View } from 'react-native';

export default function Card(props){

    return (
        <View style={styles.card} >
            <View style={styles.cardContent} >
                { props.children }
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
    }
})