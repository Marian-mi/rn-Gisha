import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Colors, Flex } from '../../Styles/Index'


const RadioButton = ({ Title, SetSelected, Selected, Index }) => {
    return (
        <Pressable style={[Flex.Row, Styles.Wrapper]} onPress={() => SetSelected(Index)} android_ripple={{ color: "rgba(0,0,0,0.2)"}}>
            <View style={[Styles.CircleOuter, Flex.Centered,  { display: "flex", borderColor: Selected ? "#4cb050" : Colors.Grey }]}>
                <View style={[Styles.CircleInner, { backgroundColor: Selected ? "#4cb050" : "transparent"}]}></View>
            </View>
            <Text style={{ textAlignVertical: 'center', marginStart: 20, fontWeight: "600" }}>
                {Title}
            </Text>
        </Pressable>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        padding: 8,
        paddingHorizontal: 20
    },
    CircleOuter: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 50
    },
    CircleInner: {
        width: 10,
        height: 10,
        borderRadius: 50
    }
})

export default RadioButton