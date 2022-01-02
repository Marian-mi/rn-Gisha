import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../../../assets/imgs/Logo.png'

const HomeHeader = () => {
    return (
        <View style={HomeHeaderStyles.Home__header}>
            <View style={{ ...HomeHeaderStyles.Wrappers, flex: 3, }}>
                <Icon name='cart' size={24} color={'red'} style={{ flex: 1, ...HomeHeaderStyles.Icons }} />
                <Icon name='magnify' size={24} color={'red'} style={{ flex: 1, ...HomeHeaderStyles.Icons }} />
            </View>
            <View style={{ flex: 4 }}></View>
            <View style={{ ...HomeHeaderStyles.Wrappers, flex: 7 }}>
                <Image source={Logo} style={{ height: 40, width: 130, flex: 5 }} />
                <Pressable style={{ flex: 2, ...FlexStyles.Centered }} android_ripple={{ color: 'white'}}>
                    <Icon name='menu' size={24} color={'white'} style={{ flex: 1, textAlignVertical: 'center' }}/>
                </Pressable>
            </View>  
        </View>
    )
}


export default HomeHeader

const HomeHeaderStyles = StyleSheet.create({
    Home__header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        left: -15,
        paddingHorizontal: 10
    },
    Wrappers: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    Icons: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    }
})

const FlexStyles = StyleSheet.create({
    Centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})