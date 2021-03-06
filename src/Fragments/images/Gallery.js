import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ImageStore, Image, useWindowDimensions, StyleSheet } from 'react-native'
import { DynamicLink } from '../../config'
import { BoxStyles, Flex } from '../../Styles/Index'


const Gallery = ({ items }) => {
    const dimensions = useRef([])

    const [images, setImages] = useState(null)

    const { width } = useWindowDimensions()

    useEffect(() => {
        items.map(({ Picture }, ind) => {
            Image.getSize(DynamicLink.PICTURE_PATH + Picture,
                (width, height) => {
                    dimensions.current.push({ width, height, ind })
                    if (ind === items.length - 1)
                        buildGallery()
                }, (err) => {
                    if (ind === items.length - 1)
                        buildGallery()
                })
        })
    }, [])

    const buildGallery = () => {
        if (images) return

        let elements = []
        let row = []
        let currentRowWidth = 0;

        const { current } = dimensions

        current.forEach((item, index) => {
            currentRowWidth += item.width
            const currentImg = items[item.ind]

            row.push(buildImage({ ...item, Picture: items[item.ind].Picture, key: currentImg.ID, reduce: 15 }))

            if (currentRowWidth > width && row.length === 1) {
                elements.push(
                    <View key={currentImg.ID} style={[Flex.Row, Styles.Frame]}>
                        {buildImage({ height: item.height, Picture: items[item.ind].Picture, width, reduce: 30 })}
                    </View>
                )
                currentRowWidth = 0
                row = []
                return
            }

            if (currentRowWidth > width
                || currentRowWidth + current[index + 1]?.width > width) {
                elements.push(
                    <View style={[Flex.Row, { justifyContent: 'space-between', paddingHorizontal: 15 }]} key={currentImg.ID}>
                        {row}
                    </View>
                )
                row = []
                currentRowWidth = 0
                return
            }


            if (item.ind === items.length - 1) {
                elements.push(
                    <View style={[Flex.Row, { justifyContent: 'space-between', paddingHorizontal: 15 }]} key={currentImg.ID}>
                        {row}
                    </View>
                )
            }
        })

        setImages(elements)
    }

    const buildImage = ({ width, Picture, height, key, reduce }) =>
        <View style={[{ shadowColor: "rbga(0,0,0,1)", elevation: 20 }]} key={key ?? 0}>
            <Image
                source={{
                    uri: DynamicLink.PICTURE_PATH + Picture,
                    width: width - reduce,
                    height: height > 250 ? (((width - 30) * (9 / 16))) : height - (reduce / 2)
                }}
            />
        </View>

    if (!images)
        return <View style={{ height: 250, ...Flex.Centered }}><Text>Loading...</Text></View>

    return (
        <View>
            {images}
        </View>
    )
}

const Styles = StyleSheet.create({
    Frame: {
        marginVertical: 15,
        ...Flex.Centered
    }
})


export default Gallery