import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default Card = props => {
 
    const displayRating = () => {
        if (props.business.rating === 0) {
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

    const displayTransaction = () => {
        if (props.business.transactions.length === 0) {
            return <Text> No Delivery </Text>
        } else if (props.business.transactions.length > 0){
            return <Image style={styles.deliveryImage} source={require('../assets/delivery.png')} />
        }
    }

    return (
        <View style={styles.card} >
            <View style={styles.cardContent} >
                <TouchableOpacity onPress={() => Actions.show({...props})}>
                    <View style={styles.top}>
                        <Text style={{fontWeight: 'bold'}}>{props.business.name}</Text>
                        {displayRating()}
                    </View>
                    <Image source={props.business.image_url ? {uri: props.business.image_url} : null} style={styles.picture}/>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{props.business.location.display_address[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{props.business.display_phone}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomFirst}>
                    <Text>Reviews: {props.business.review_count}</Text>
                    <Text>{props.business.is_closed === false ? 'OPEN':'CLOSED'}</Text>
                    <Text style={styles.price}>{props.business.price}</Text>
                    {displayTransaction()}
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
        flex: 1
    },
    picture: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    bottomFirst: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    button: {
        backgroundColor: 'tomato',
        padding: 8,
        width: '50%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    ratingImg: {
        width: 120,
        height: 20
    },
    price: {
        fontWeight: 'bold',
        color: 'green'
    },
    deliveryImage: {
        height: 25,
        width: 25
    }
})