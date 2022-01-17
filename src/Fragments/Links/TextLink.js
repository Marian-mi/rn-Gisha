import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BoxStyles, Colors } from '../../Styles/Index'


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

const Styles = StyleSheet.create({
    Link: {
        backgroundColor: Colors.Primary,
        color: "white",
        borderRadius: 20,
        marginHorizontal: 5,
        padding: 6,
        paddingHorizontal: 22,
        fontSize: 13,
        ...BoxStyles.Shadow,
        fontFamily: "Samim",
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})