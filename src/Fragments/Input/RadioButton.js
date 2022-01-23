import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Colors, Flex } from '../../Styles/Index'
import { RadioButtonStyles } from './Styles'


const RadioButton = ({ Title, SetSelected, Selected, Index }) => {
    return (
        <Pressable style={[Flex.Row, RadioButtonStyles.Wrapper]} onPress={() => SetSelected(Index)} android_ripple={{ color: "rgba(0,0,0,0.2)"}}>
            <View style={[RadioButtonStyles.CircleOuter, Flex.Centered,  { display: "flex", borderColor: Selected ? "#4cb050" : Colors.Grey }]}>
                <View style={[RadioButtonStyles.CircleInner, { backgroundColor: Selected ? "#4cb050" : "transparent"}]}></View>
            </View>
            <Text style={RadioButtonStyles.Title}>
                {Title}
            </Text>
        </Pressable>
    )
}


export default RadioButton