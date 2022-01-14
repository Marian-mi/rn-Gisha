import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import { Directions, FlatList } from 'react-native-gesture-handler'
import HomeContext from '../../ContextProviders/HomeContext'
import ProductContext from '../../ContextProviders/ProductContext'
import MainHeader from '../../Fragments/Headers/MainHeader'
import Gallery from '../../Fragments/images/Gallery'


const Test = ({ autoplay }) => {
    const { gallery } = useContext(HomeContext)
    return (
        <Gallery
            items={gallery}
        />
    )
}


export default Test