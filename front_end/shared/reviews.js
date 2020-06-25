import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, Linking, Button } from 'react-native';

export default Review = props => {

    const displayRating = () => {
        if (props.review.rating === 0) {
            return  <Image style={styles.ratingImg} source={require('../assets/stars_regular_0.png')} />
        } else if (props.review.rating === 1){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_1.png')} />
        } else if (props.review.rating === 1.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_1_half.png')} />
        } else if (props.review.rating === 2){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_2.png')} />
        } else if (props.review.rating === 2.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_2_half.png')} />
        } else if (props.review.rating === 3){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_3.png')} />
        } else if (props.review.rating === 3.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_3_half.png')} />
        } else if (props.review.rating === 4){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_4.png')} />
        } else if (props.review.rating === 4.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_4_half.png')} />
        } else if (props.review.rating === 5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_5.png')} />
        } 
    }

    return (
        <View style={styles.card}>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL(`${props.review.user.profile_url}`)}> 
                    <View style={styles.userInfo}>
                        <Image source={props.review.user.image_url ? {uri: props.review.user.image_url} : require('../assets/noImg.png') } style={ styles.userImg } />
                        <Text>{props.review.user.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.reviewInfo}>
                {displayRating()}
                <Text>{props.review.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        borderRadius: 5,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 20, height: 25},
        shadowColor: 'black',
        margin: 5,
        padding: 15
    },
    userImg: {
        borderRadius: 40,
        height: 75,
        width: 75
    },
    reviewInfo: {
        width: 325,
        marginLeft: 15
    },
    userInfo: {
        alignItems: 'center',
        width: 110
    }
})

