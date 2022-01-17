import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, Image, useWindowDimensions, Pressable, StyleSheet, Animated, Easing } from 'react-native'
import { Directions, FlatList } from 'react-native-gesture-handler'
import AppContext from '../../ContextProviders/AppContext'
import ProductContext from '../../ContextProviders/ProductContext'
import MainHeader from '../../Fragments/Headers/MainHeader'
import Gallery from '../../Fragments/images/Gallery'
import { Colors, Flex } from '../../Styles/Index'


const Test = () => {
    return (
        <Loader />
    )
}

const Loader = () => {
    const ref = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(Animated.timing(ref, {
            toValue: 1,
            easing: Easing.linear,
            duration: 3000,
            useNativeDriver: true
        })).start()
    }, [ref])

    return (
        <View style={[Styles.Wrapper, Flex.Row]}>
            <Animated.View
                style={[Styles.Loader,
                { transform: [{ translateX: ref.interpolate({ inputRange: [0, 0.25, 0.5, 0.75, 1], outputRange: [0, -50, 0, 50, 0] }) }] }]}
            >
            </Animated.View>
            <Animated.View
                style={[Styles.Loader,
                { transform: [{ translateX: ref.interpolate({ inputRange: [0, 0.20, 0.5, 0.80, 1], outputRange: [0, -50, 0, 50, 0] }) }] }]}
            >
            </Animated.View>
            <Animated.View
                style={[Styles.Loader,
                { transform: [{ translateX: ref.interpolate({ inputRange: [0, 0.15, 0.5, 0.85, 1], outputRange: [0, -50, 0, 50, 0] }) }] }]}
            >
            </Animated.View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        height: 200,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    Loader: {
        width: 7,
        height: 7,
        backgroundColor: "grey",
        borderRadius: 50,
    }
})

export default Test