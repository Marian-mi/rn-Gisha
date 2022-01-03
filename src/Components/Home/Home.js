import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import ProductContext from '../../ContextProviders/ProductContext'
import MainHeader from '../../Fragments/Headers/MainHeader'


const Home = ({ navigation }) => {
    const productContext = useContext(ProductContext)
    return (
        <View style={{ paddingTop: 60}}>
            <MainHeader navigation={navigation} />
            <Pressable onPress={() => navigation.navigate('ProductGroup')}>
                <Text>This is home</Text>
            </Pressable>
            <Text>{productContext.products[0]?.title}</Text>
        </View>
    )
}


export default Home
