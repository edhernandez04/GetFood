import React from 'react'
import { StyleSheet, View, TextInput, ScrollView, Image, Text } from 'react-native';
import axios from 'axios'

class BizShow extends React.Component {

    state = {
        loading: false,
        business: {},
        reviews: []
    }

    componentDidMount(){
        this.fetchBusiness()
    }

    fetchBusiness = () => {
        const config = {
            headers: {
                Authorization: 'Bearer vAkWYC6AXF6znx1BJu2dkzt41cKzZSUHLtzQ8bI9nif1NDiJCXO1JWoAcqqG6uELscgKna3Ho76oDHMWWiRoleTJNUMdRsh2kJRYJfHmKvHZRdQZw9angcEwVJW5XnYx',
            }
        }
        axios.get(`https://api.yelp.com/v3/businesses/${this.props.navigation.state.params.business.id}`, config)
            .then( bizResult => this.setState({ business: bizResult.data }) ),
        axios.get(`https://api.yelp.com/v3/businesses/${this.props.navigation.state.params.business.id}/reviews`, config)
            .then( reviews => this.setState({ reviews: reviews.data }) )
    }

    render(){
        console.log(this.state.reviews.reviews)
        return (
            <ScrollView>
            <View>
                <View>
                    <Image source={ {uri: this.state.business.image_url} } style={styles.imageUrl}/>
                </View>
                <View style={styles.contactInfo}>
                    <Text style={styles.name}> {this.state.business.name} </Text>
                    <Text style={styles.price}>{this.state.business.price}</Text>
                    <Text> {this.state.business.display_phone} </Text>
                    <Text> {this.state.business.location && this.state.business.location.display_address[0]}</Text>
                    <Text> {this.state.business.location && this.state.business.location.display_address[1]}</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.photoCarosel}>
                        {this.state.business.photos && this.state.business.photos.map( (photo, index) => {
                            return <View style={styles.bizPhotos} ><Image key={index} source={ {uri: photo} } style={styles.bottomPics}/></View>
                        })}
                    </View>
                </ScrollView>
                <View>
                    {this.state.reviews.reviews.map( review => {
                        return <Review key={review.id} review={review}/>
                    })}
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageUrl: {
        height: 200,
        width: '100%'
    },
    contactInfo: {
        borderRadius: 3,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 20, height: 25},
        shadowColor: 'black',
        marginBottom: 5,
        padding: 10
    },
    photoCarosel: {
        flexDirection: 'row'
    },
    bizPhotos: {
        margin: 5,
        borderRadius: 3,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 30, height: 35},
        shadowColor: 'black',
        padding: 5
    },
    bottomPics: {
        height: 250,
        width: 300,
        borderRadius: 3
    },
    price: {
        fontWeight: 'bold',
        color: 'green'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})

export default BizShow