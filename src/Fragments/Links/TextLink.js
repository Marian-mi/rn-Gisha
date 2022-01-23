import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BoxStyles, Colors } from '../../Styles/Index'
import { Styles } from './Styles'


const TextLinkView = ({ data }) => {
    const navigation = useNavigation();

    return (
        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 15}} showsHorizontalScrollIndicator={false}>
            {
                data.map(({ Title, LinkID, ID }) => (
                    <TextLink
                        title={Title}
                        action={() => navigation.navigate(`Search`, { LinkID, Title })}
                        key={ID}
                    />
                ))
            }
        </ScrollView>
    )
}

export const TextLink = ({ action, title }) => {
    return (
        <Pressable onPress={() => action()}>
            <Text style={Styles.Link}>{title}</Text>
        </Pressable>
    )
}

export default TextLinkView
