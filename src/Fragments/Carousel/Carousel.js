import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, Image, useWindowDimensions, Pressable, StyleSheet } from 'react-native'
import { Directions, FlatList } from 'react-native-gesture-handler'
import ProductContext from '../../ContextProviders/ProductContext'
import MainHeader from '../../Fragments/Headers/MainHeader'
import { Styles } from './Styles'


const Carousel = ({ autoplay, data, renderer, scrollDisabled, keyExtractor }) => {
    if (!data || data?.length === 0 || Object.prototype.toString.call(data) !== '[object Array]')
        return null 
    const { width, height } = useWindowDimensions()

    const [sliderIndex, setSliderIndex] = useState(0)

    const sliderRef = useRef()
    const autoplayRef = useRef()
    const timerStarted = useRef(false)
    const sliderDirection = useRef("left")

    const startAutoplay = () => {
        if (!timerStarted.current) {
            autoplayRef.current = setInterval(changeIndex, autoplay.duration)
            timerStarted.current = true;
        }
    }

    const changeIndex = () => {
        if (sliderDirection.current === 'right')
            setSliderIndex(ps => {
                const nextVal = --ps
                slide(nextVal)
                return nextVal
            });
        else
            setSliderIndex(ps => {
                const nextVal = ++ps
                slide(nextVal)
                return nextVal
            })
    }

    useEffect(() => {
        if (sliderIndex === data.length - 1 && sliderDirection.current === 'left')
            sliderDirection.current = "right"
        if (sliderIndex === 0 && sliderDirection.current === "right")
            sliderDirection.current = "left"
        
    }, [sliderIndex])

    useEffect(() => {
        if (data?.length > 0) {
            autoplay && startAutoplay()

            return () => {
                if (autoplayRef.current) {
                    clearInterval(autoplayRef.current)
                    timerStarted.current = false
                }
            }
        }
    }, [data])

    const slide = (ind) => {
        sliderRef.current.scrollToOffset({
            offset: ((data.length - ind - 1) * width),
            animated: true
        })
    }

    const viewableChanged = React.useCallback((e) => {
        const scrollX = e.nativeEvent.contentOffset.x
        const offset = ~~Math.abs((scrollX - width * (data.length - 1)))
        setSliderIndex(~~(offset / ~~width))
    })

    return (
        <View style={{ position: 'relative' }}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnaled={!scrollDisabled}
                pagingEnabled
                ref={sliderRef}
                renderItem={({ item, index }) => renderer(item)}
                keyExtractor={keyExtractor ?? ((item) => item.key)}
                onMomentumScrollEnd={viewableChanged}
            />
            <Indicator count={data.length} current={sliderIndex} />
        </View>
    )
}

const Indicator = ({ count, current }) => {
    let circles = []
    for (let i = 0; i < count; i++) {
        circles.push((
            <View key={i}
                style={[Styles.Indicator, i === current ? Styles.IndicatorCurrent : null]}
            />
        ))
    }
    return (
        <View style={[Styles.IndicatorWrapper]}>
            {circles}
        </View>
    )
}




export default Carousel