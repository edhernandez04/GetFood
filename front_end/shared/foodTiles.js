import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image } from 'react-native';

export default function FoodTile() {
    return (
<View>

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/fastFood.png')}/>
            <Text style={styles.text}>Fast Food</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Healthy.png')}/>
            <Text style={styles.text}>Healthy</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Pizza.png')}/>
            <Text style={styles.text}>Pizza</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Sushi.png')}/>
            <Text style={styles.text}>Sushi</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Seafood.png')}/>
            <Text style={styles.text}>Seafood</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Chicken.png')}/>
            <Text style={styles.text}>Chicken</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/American.png')}/>
            <Text style={styles.text}>American</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Breakfast.png')}/>
            <Text style={styles.text}>Breakfast</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Mexican.png')}/>
            <Text style={styles.text}>Mexican</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Chinese.png')}/>
            <Text style={styles.text}>Chinese</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Italian.png')}/>
            <Text style={styles.text}>Italian</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.card}> 
        <TouchableOpacity style={styles.button} >
            <Image style={styles.image} source={require('../assets/Spanish.png')}/>
            <Text style={styles.text}>Spanish</Text>
        </TouchableOpacity>
    </View>

    </ScrollView>

</View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 70,
        width: 100,
        borderRadius: 5,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 25, height: 25},
        shadowColor: 'black',
        margin: 10,
        padding: 5
    },
    image: {
        height: 35,
        width: 35
    },
    button: {
        alignItems: 'center'
    },
    text: {
        fontFamily: 'sans-serif-thin'
    }
})