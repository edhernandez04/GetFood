import React, {useEffect, useState} from 'react'
import { StyleSheet, View, TextInput, ScrollView, Image, Text } from 'react-native';
import axios from 'axios'

const BizShow = props => {

        const [business, setBusiness] = useState({})

        useEffect(() => {
            const config = {
                headers: {
                    Authorization: 'Bearer vAkWYC6AXF6znx1BJu2dkzt41cKzZSUHLtzQ8bI9nif1NDiJCXO1JWoAcqqG6uELscgKna3Ho76oDHMWWiRoleTJNUMdRsh2kJRYJfHmKvHZRdQZw9angcEwVJW5XnYx',
                }
            }
            axios.get(`https://api.yelp.com/v3/businesses/${props.navigation.state.params.business.id}`, config)
            .then( bizResult => setBusiness(bizResult) )
            .then(console.log(business))
        }, [])

        return (
            <View>
                <Text> HELLO </Text>
                <Image source={ {uri: business.data.image_url} } style={styles.imageUrl}/>
            </View>
        )
}

const styles = StyleSheet.create({
    imageUrl: {
        height: 200,
        width: 200
    }
})

export default BizShow