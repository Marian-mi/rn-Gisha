import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import { Directions, FlatList } from 'react-native-gesture-handler'
import ProductContext from '../../ContextProviders/ProductContext'
import MainHeader from '../../Fragments/Headers/MainHeader'


const Test = ({ autoplay }) => {
    const { products } = useContext(ProductContext)
    const images = products.slice(0, 6).map(x => ({ image: x.image, key: x.id}))

    const { width, height } = useWindowDimensions()

    const sliderRef = useRef()
    const autoplayRef = useRef()
    const timerStarted = useRef(false)
    const sliderDirection = useRef("left")
    const sliderIndex = useRef(0)

    const startAutoplay = () => {
        if (!timerStarted.current) {
            autoplayRef.current = setInterval(changeIndex, autoplay.duration)
            timerStarted.current = true;
        }
    } 

    const changeIndex = () => {
        let nextIndex = sliderIndex.current;
        if (sliderIndex.current === images.length - 1 && sliderDirection.current === 'left') 
            sliderDirection.current = "right"
        if (sliderIndex.current === 0 && sliderDirection.current === "right") 
            sliderDirection.current = "left"
        
        if (sliderDirection.current === 'right')
            nextIndex--
        else
            nextIndex++

        sliderIndex.current = nextIndex;
        slide()
    }

    useEffect(() => {
        autoplay && startAutoplay()
        
        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current)
                timerStarted.current = false
            }
        }
    }, [])

    const slide = () => {
        sliderRef.current.scrollToIndex({
            index: sliderIndex.current,
            animated: true
        })
    }

    return (
        <View style={{ paddingTop: 55 }}>
            <MainHeader />
            <FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={sliderRef}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.image, width, height: 200 }} />
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}


export default Test