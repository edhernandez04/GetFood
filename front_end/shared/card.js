import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

export default Card = props => {
 
    const displayRating = () => {
        if(props.business.rating === 0){
            return  <Image style={styles.ratingImg} source={require('../assets/stars_regular_0.png')} />
        } else if (props.business.rating === 1){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_1.png')} />
        } else if (props.business.rating === 1.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_1_half.png')} />
        } else if (props.business.rating === 2){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_2.png')} />
        } else if (props.business.rating === 2.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_2_half.png')} />
        } else if (props.business.rating === 3){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_3.png')} />
        } else if (props.business.rating === 3.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_3_half.png')} />
        } else if (props.business.rating === 4){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_4.png')} />
        } else if (props.business.rating === 4.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_4_half.png')} />
        } else if (props.business.rating === 5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_5.png')} />
        } 
    }

    return (
        <View style={styles.card} >
            <View style={styles.cardContent} >
                <View style={styles.top}>
                    <Text style={styles.price}>{props.business.price}</Text>
                    <Text>{props.business.name}</Text>
                        {displayRating()}
                </View>
                <Image source={{uri: props.business.image_url}} style={styles.picture}/>
                <View style={styles.bottom}>
                    <Text>{props.business.display_phone}</Text>
                    <Text>{props.business.location.address1}</Text>
                    <Text>{props.business.is_closed ? 'OPEN':'CLOSED'}</Text>
                </View>
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
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 2
    },
    ratingImg: {
        width: 120,
        height: 20
    },
    price: {
        fontWeight: 'bold',
        color: 'green'
    }
})