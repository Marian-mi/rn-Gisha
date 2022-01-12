import { nanoid } from 'nanoid/non-secure'
import React, { useContext, useEffect } from 'react'
import { View, Text, Pressable, Image, useWindowDimensions } from 'react-native'
import { Axios } from '../../../App'
import ProductContext from '../../ContextProviders/ProductContext'
import Carousel from '../../Fragments/Carousel/Carousel'
import MainHeader from '../../Fragments/Headers/MainHeader'
import ProductList from '../../Fragments/ProductList/ProductList'
import { PureView } from '../ProductPage/ProductPage'


const Home = ({ navigation }) => {
    const { products, setProducts, isFetching } = useContext(ProductContext)
    const { width } = useWindowDimensions()

    useEffect(() => {
        ; (async () => {
            try {
                const response = await fetch("http://192.168.1.104:8182/api/shop/app/getall", {
                    body: JSON.stringify({ TagTake: 20 }),
                    method: 'POST',
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                })
                const data = await response.json();
                console.log(data)

            }
            catch (err) {
                console.log(err)
            }
            //setProducts((ps) => ({...ps, products: data, isFetching: false}))
        })();
    }, [])
    return null
    const renderItem = item => {
        return (
            <PureView key={item.key}>
                <Image source={{ uri: item.image, width, height: 250 }} />
            </PureView>
        );
    };


    return (
        <View style={{ paddingTop: 55 }}>
            <MainHeader navigation={navigation} />

            <Carousel
                data={products.slice(0, 9)}
                renderer={renderItem}
                scrollDisabled
                autoplay={{
                    duration: 5000,
                }}
            />

            <ProductList
                products={products.slice(6, 12)}
                title="محصولات پرفروش"
            />
        </View>
    )
}


export default Home
