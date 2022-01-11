import React, { useContext, useEffect } from 'react'
import { View, Text, Pressable, Image, useWindowDimensions } from 'react-native'
import ProductContext from '../../ContextProviders/ProductContext'
import Carousel from '../../Fragments/Carousel/Carousel'
import MainHeader from '../../Fragments/Headers/MainHeader'
import ProductList from '../../Fragments/ProductList/ProductList'
import { PureView } from '../ProductPage/ProductPage'


const Home = ({ navigation }) => {
    const { products, setProducts } = useContext(ProductContext)
    const { width } = useWindowDimensions()

    useEffect(() => {
        ; (async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();

            setProducts((ps) => ({...ps, products: data, isFetching: false}))
        })();
    }, [])

    const renderItem = item => {
        return (
            <PureView>
                <Image source={{ uri: item.image, width, height: 250 }} />
            </PureView>
        );
    };


    return (
        <View style={{ paddingTop: 60}}>
            <MainHeader navigation={navigation} />

            <Carousel 
                data={products.splice(0, 6)}
                renderer={renderItem}
                autoplay={{
                    duration: 5000,
                }}
            />

            <ProductList 
                products={products.splice(6, 12)}
                title="محصولات پرفروش"
            />
        </View>
    )
}


export default Home
