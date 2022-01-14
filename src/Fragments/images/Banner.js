import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions } from 'react-native'
import { PICTURE_PATH } from '../../../App'


const Banner = ({ name, action }) => {
    const { width } = useWindowDimensions()

    return (
        <Pressable onPress={() => action()} style={{ marginVertical: 30 }}>
              <Image source={{ uri: PICTURE_PATH + name, height: width * (6 / 19), width }} />
        </Pressable>
    )
}

export default Banner