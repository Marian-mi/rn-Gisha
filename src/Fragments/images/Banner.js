import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions } from 'react-native'
import { PICTURE_PATH } from '../../../App'
import { DynamicLink } from '../../config'


const Banner = ({ name, action }) => {
    const { width } = useWindowDimensions()

    return (
        <Pressable onPress={() => action()}>
              <Image source={{ uri: DynamicLink.PICTURE_PATH + name, height: width * (6 / 19), width }} />
        </Pressable>
    )
}

export default Banner