import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const ProductBox = ({ Title, ImageSrc, Price }) => {
    return (
        <View style={ProductBoxStyle.Wrapper}>
            <Image source={{ uri: ImageSrc, height: 170, width: 130 }} />
            <Text style={ProductBoxStyle.Title}>
                {Title}
            </Text>
            <Text style={ProductBoxStyle.Price}>
                {Price}
            </Text>
        </View>
    )
}

const ProductBoxStyle = StyleSheet.create({
    Wrapper: {
        marginHorizontal: 10,
        marginTop: 50,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: 'white',
        width: 170,
        alignItems: 'center'
    },
    Title: {
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        padding: 20,
        maxHeight: 60,
    },
    Price: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        paddingVertical: 10
    }
})


export default ProductBox