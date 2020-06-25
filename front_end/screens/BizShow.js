import React from 'react'
import { StyleSheet, View, TextInput, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Review from '../shared/reviews'
import { Actions } from 'react-native-router-flux';
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
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View>
                    <Image source={ {uri: this.state.business.image_url} } style={styles.imageUrl}/>
                </View>
                <View>
                    <TouchableOpacity onPress={() => Actions.menu({biz: this.state.business})}>
                        <View style={styles.orderButton}>
                            <Text style={styles.orderLine}> ORDER ONLINE </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contactInfo}>
                    <View style={styles.nameInfo}>
                        <Text style={styles.name}> {this.state.business.name} </Text>
                    </View>
                    <View style={styles.locationInfo}>
                        {this.state.business.price ? <Text style={styles.price}>{this.state.business.price}</Text>: null}
                        <Text style={{textAlign: 'right'}}> {this.state.business.location && this.state.business.location.display_address[0]}</Text>
                        <Text style={{textAlign: 'right'}}> {this.state.business.display_phone} </Text>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.photoCarosel}>
                        {this.state.business.photos && this.state.business.photos.map( (photo, index) => {
                            return <View key={index} style={styles.bizPhotos} ><Image source={ {uri: photo} } style={styles.bottomPics}/></View>
                        })}
                    </View>
                </ScrollView>
                <View>
                    {this.state.reviews.reviews && this.state.reviews.reviews.map( (review, index) => {
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
        flex: 1,
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 20, height: 25},
        shadowColor: 'black',
        marginBottom: 5,
        padding: 10
    },
    photoCarosel: {
        flexDirection: 'row',
        marginBottom: 5
    },
    bizPhotos: {
        margin: 5,
        borderRadius: 3,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 30, height: 35},
        shadowColor: 'black',
        padding: 5,
        backgroundColor: 'tomato'
    },
    bottomPics: {
        height: 250,
        width: 300,
        borderRadius: 3
    },
    price: {
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'right'
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    nameInfo: {
        justifyContent: 'center',
        width: 305
    },
    locationInfo: {
        flex:1
    },
    orderButton: {
        backgroundColor: 'tomato',
        padding: 8
    },
    orderLine: {
        color: 'white',
        textAlign: 'center'
    }
})

export default BizShow