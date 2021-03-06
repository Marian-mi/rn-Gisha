import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Flex } from '../../Styles/Index'
import { Styles } from './Styles'


const EmptyList = ({ text }) => {
    const infoText = text ?? "متاسفانه چیزی پیدا نکردیم!"
    
    return (
        <View style={[Styles.Wrapper]}>
              <Icon name='magnify-scan' size={48} color={"rgba(0,0,0, 0.4)"} />
              <Text style={[Styles.Text]}>{infoText}</Text>
        </View>
    )
}



export default EmptyList