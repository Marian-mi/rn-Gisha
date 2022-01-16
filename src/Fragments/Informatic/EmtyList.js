import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Flex } from '../../Styles/Index'


const EmptyList = ({ text }) => {
    const infoText = text ?? "متاسفانه چیزی پیدا نکردیم!"
    return (
        <View style={[Styles.Wrapper]}>
              <Icon name='magnify-scan' size={48} color={Colors.Grey} />
              <Text style={{ marginTop: 15}}>{infoText}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        height: 300,
        ...Flex.Centered,
    }
})

export default EmptyList