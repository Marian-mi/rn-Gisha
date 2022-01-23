import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { BoxStyles, FlatStyles } from './Styles'


const ProductBox = ({ Title, ImageSrc, Price, Width, FlexBasis, Style, ID }) => {
    const ProductBoxStyle = Style === "flat" ? FlatStyles : BoxStyles
    const navigation = useNavigation()

    return (
        <Pressable
            style={[ProductBoxStyle.Wrapper, computeWitdth(Width, FlexBasis)]}
            onPress={() => navigation.push("ProductPage", { ID })}
        >
            <View style={ProductBoxStyle.Image} >
                <Image source={{ uri: ImageSrc, ...computeImageWidth(Style) }} />
            </View>
            {Style === 'flat' ?
                <>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 6, display: 'flex' }}>
                        <Text style={ProductBoxStyle.Title}>
                            {Title}
                        </Text>
                        <Text style={ProductBoxStyle.Price}>
                            {Price}
                        </Text>
                    </View>
                </>
                :
                <>
                    <Text style={ProductBoxStyle.Title}>
                        {Title}
                    </Text>
                    <Text style={ProductBoxStyle.Price}>
                        {Price}
                    </Text>
                </>
            }
        </Pressable>
    )
}

const computeWitdth = (p1, p2) => {
    return p1 ? { width: p1 } : p2 ? { flexBasis: p2 } : null
}

const computeImageWidth = (style) => (style === 'flat' ? { width: 90, height: 90 } : { width: 120, height: 120 })




export default ProductBox