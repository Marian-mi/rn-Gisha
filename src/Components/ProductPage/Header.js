import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TitledHeaderStyles } from '../../Fragments/Headers/TitledHeader'
import { Colors, Flex, TextStyles } from '../../Styles/Index'


const ProductPageHeader = ({ title, scrollY }) => {
    const navigation = useNavigation()

    const iconsColor = scrollY > 0 ? "white" : Colors.Grey
    return (
        <View style={[TitledHeaderStyles.Container, { position: 'relative', zIndex: 10, backgroundColor: scrollY > 0 ? Colors.Primary : "white" }]}>
            <View style={{ ...TitledHeaderStyles.Wrappers, flex: 7 }}>
                <Pressable
                    style={{ flex: 1, ...Flex.Centered }}
                    android_ripple={{ color: 'white' }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrow-right' size={24} color={iconsColor} style={{ flex: 1, textAlignVertical: 'center' }} />
                </Pressable>
                <Pressable style={TitledHeaderStyles.Title}>
                    <Text numberOfLines={1} style={[TextStyles.Title1]}>{title}</Text>
                </Pressable>
            </View>

            <View style={{ flex: 1 }} />

            <View style={{ ...TitledHeaderStyles.Wrappers, flex: 2, }}>
                <Icon name='cart' size={24} style={{ flex: 1, ...TitledHeaderStyles.Icons, color: iconsColor }} />
                <Icon name='dots-vertical' size={24} style={{ flex: 1, ...TitledHeaderStyles.Icons, color: iconsColor }} />
            </View>
        </View>
    )
}


export default ProductPageHeader