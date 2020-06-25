import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image } from 'react-native';

export default Review = props => {

    const [review, setReview] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer vAkWYC6AXF6znx1BJu2dkzt41cKzZSUHLtzQ8bI9nif1NDiJCXO1JWoAcqqG6uELscgKna3Ho76oDHMWWiRoleTJNUMdRsh2kJRYJfHmKvHZRdQZw9angcEwVJW5XnYx',
            }
        }
        axios.get(`https://api.yelp.com/v3/businesses/${props.navigation.state.params.business.id}/reviews`, config)
            .then( reviews => console.log(reviews.response) )
    }, [])

    const displayRating = () => {
        if (props.reviews.reviews.rating === 0) {
            return  <Image style={styles.ratingImg} source={require('../assets/stars_regular_0.png')} />
        } else if (props.reviews.reviews.rating === 1){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_1.png')} />
        } else if (props.reviews.reviews.rating === 1.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_1_half.png')} />
        } else if (props.reviews.reviews.rating === 2){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_2.png')} />
        } else if (props.reviews.reviews.rating === 2.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_2_half.png')} />
        } else if (props.reviews.reviews.rating === 3){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_3.png')} />
        } else if (props.reviews.reviews.rating === 3.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_3_half.png')} />
        } else if (props.reviews.reviews.rating === 4){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_4.png')} />
        } else if (props.reviews.reviews.rating === 4.5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_4_half.png')} />
        } else if (props.reviews.reviews.rating === 5){
            return <Image style={styles.ratingImg} source={require('../assets/stars_regular_5.png')} />
        } 
    }

    return (

        <View>
            Hello
        </View>
    )
}

