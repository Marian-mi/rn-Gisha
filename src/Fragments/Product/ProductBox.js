import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const ProductBox = ({ Title, ImageSrc, Price, Width, FlexBasis, Style }) => {
    const ProductBoxStyle = Style === "flat" ? FlatStyles : BoxStyles
    return (
        <View style={[ProductBoxStyle.Wrapper, computeWitdth(Width, FlexBasis)]}>
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
        </View>
    )
}

const computeWitdth = (p1, p2) => {
    return p1 ? { width: p1 } : p2 ? { flexBasis: p2 } : null
}

const computeImageWidth = (style) => (style === 'flat' ? { width: 90, height: 90 } : { width: 130, height: 170 })

const BoxStyles = StyleSheet.create({
    Wrapper: {
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Title: {
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        padding: 20,
        maxHeight: 60,
    },
    Price: {
        alignSelf: 'flex-end',
        marginEnd: 20,
        paddingVertical: 10
    }
})

const FlatStyles = StyleSheet.create({
    Wrapper: {
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 170
    },
    Image: {
        flex: 3,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    Title: {
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        padding: 20,
        textAlignVertical: 'center',
        lineHeight: 25,
        flex: 3
    },
    Price: {
        alignSelf: 'flex-end',
        marginEnd: 20,
        paddingVertical: 10,
        flex: 1
    }
})


export default ProductBox