import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import MainHeader from '../../Fragments/Headers/MainHeader'


const Home = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 60}}>
            <MainHeader navigation={navigation} />
            <Pressable onPress={() => navigation.navigate('ProductGroup')}>
                <Text>This is home</Text>
            </Pressable>
        </View>
    )
}


export default Home
