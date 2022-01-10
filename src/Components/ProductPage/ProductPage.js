import React, { useContext, useState } from 'react'
import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import ProductContext from '../../ContextProviders/ProductContext'
import Carousel from '../../Fragments/Carousel/Carousel'
import MainHeader from '../../Fragments/Headers/MainHeader'
import { BoxStyles, Colors, Flex } from '../../Styles/Index'


const ProductPage = () => {
    const { products } = useContext(ProductContext)
    const data = products.slice(0, 6).map(x => ({ image: x.image, key: x.id }))

    const { width } = useWindowDimensions()

    const renderItem = (item) => {
        return (
            <PureView>
                <Image source={{ uri: item.image, width, height: 250 }} />
            </PureView>
        )
    }

    return (
        <View style={{ paddingTop: 55 }}>
            <MainHeader />
            <Carousel
                data={data}
                renderer={renderItem}
            />
            <Title />
            <View style={{ padding: 20 }}>
                <Buttons />
                <View style={{ backgroundColor: 'white', marginTop: 20, padding: 20, ...BoxStyles.Shadow, borderRadius: 4 }}>
                    <Text style={{ lineHeight: 24 }}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </Text>
                </View>
            </View>
        </View>
    )
}

const PureView = React.memo(({ children }) => <View>{children}</View>)

const Title = ({ title }) => (
    <View style={[Styles.Title]}>
        <View style={[Flex.Row, { justifyContent: 'flex-end' }]}>
            <Icon name='heart' size={26} color={Colors.Grey} style={{ marginEnd: 15 }} />
            <Icon name='share-variant' size={26} color={Colors.Grey} />
        </View>
        <Text style={Styles.TitleText}>عنوان مورد نظر محصول در این قسمت نمایش داده میشود</Text>
    </View>
)

const Buttons = () => (
    <View style={Flex.Row}>
        <Pressable style={Styles.Button} >
            <Icon name='comment-multiple' size={22} color={Colors.Grey} />
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: "600" }}>نظرات کاربران</Text>
        </Pressable>
        <View style={{ flex: 1 }} />
        <Pressable style={Styles.Button} >
            <Icon name='clipboard-text-outline' size={26} color={Colors.Grey} />
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: "600" }}>مشخصات</Text>
        </Pressable>
    </View>
)

const Styles = StyleSheet.create({
    Title: {
        padding: 15,
        backgroundColor: "#fafafa",
        ...BoxStyles.Shadow
    },
    TitleText: {
        fontSize: 20,
        fontWeight: "600",
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 35,
    },
    Button: {
        flex: 4,
        ...Flex.Row,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        padding: 8,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        ...BoxStyles.Shadow
    }
})

export default ProductPage