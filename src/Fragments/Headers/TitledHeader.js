import React, { useState } from 'react'
import { View, Text } from 'react-native'


const TitledHeader = ({ navigation, title}) => {
    return (
        <View style={TitledHeaderStyles.Container}>
            <View style={{ ...TitledHeaderStyles.Wrappers, flex: 7 }}>
                <Pressable 
                    style={{ flex: 2, ...FlexStyles.Centered }} 
                    android_ripple={{ color: 'white' }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrow-right' size={24} color={'white'} style={{ flex: 1, textAlignVertical: 'center' }} />
                </Pressable>
                <Pressable>
                    <Text>{ title }</Text>
                </Pressable>
            </View>

            <View style={{ flex: 2 }}></View>
            
            <View style={{ ...TitledHeaderStyles.Wrappers, flex: 3, }}>
                <Icon name='magnify' size={24} color={'red'} style={{ flex: 1, ...TitledHeaderStyles.Icons }} />
                <Icon name='cart' size={24} color={'red'} style={{ flex: 1, ...TitledHeaderStyles.Icons }} />
            </View>
        </View>
    )
}


export default TitledHeader

const TitledHeaderStyles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#de1f26',
        position: 'absolute',
        top: 0,
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