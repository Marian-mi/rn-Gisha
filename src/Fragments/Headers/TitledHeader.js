import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextStyles } from '../../Styles/Index'


const TitledHeader = ({ title }) => {
    const navigation = useNavigation()
    return (
        <View style={TitledHeaderStyles.Container}>
            <View style={{ ...TitledHeaderStyles.Wrappers, flex: 7 }}>
                <Pressable
                    style={{ flex: 1, ...FlexStyles.Centered }}
                    android_ripple={{ color: 'white' }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrow-right' size={24} color={'white'} style={{ flex: 1, textAlignVertical: 'center' }} />
                </Pressable>
                <Pressable style={TitledHeaderStyles.Title}>
                    <Text numberOfLines={1} style={ TextStyles.Title1 }>{title}</Text>
                </Pressable>
            </View>


            <View style={{ ...TitledHeaderStyles.Wrappers, flex: 2, }}>
                <Icon name='magnify' size={24} color={'red'} style={{ flex: 1, ...TitledHeaderStyles.Icons }} />
                <Icon name='cart' size={24} color={'red'} style={{ flex: 1, ...TitledHeaderStyles.Icons }} />
            </View>
        </View>
    )
}


export default TitledHeader

export const TitledHeaderStyles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#de1f26',
        position: 'absolute',
        top: 0,
        zIndex: 1
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
    },
    Title: {
        flex: 4,
        justifyContent: 'center',
        height: 40,
        paddingStart: 10,
        fontFamily: "Samim",
    }
})

const FlexStyles = StyleSheet.create({
    Centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})