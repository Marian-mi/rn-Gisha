import React from 'react'
import { View, Text, Pressable } from 'react-native'


const Home = ({ navigation }) => {
    return (
        <View>
            <Pressable onPress={() => navigation.navigate('ProductGroup')}>
                <Text>This is home</Text>
            </Pressable>
        </View>
    )
}


export default Home
