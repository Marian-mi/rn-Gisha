import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import ProductContext from '../../ContextProviders/ProductContext.js'
import MainHeader from '../../Fragments/Headers/MainHeader'
import ProductBox from '../../Fragments/Product/ProductBox'


const ProductGroup = ({ navigation }) => {
    const productContext = useContext(ProductContext)

    useEffect(() => {
        ; (async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();

            productContext.setProducts((ps) => ({...ps, products: data, isFetching: false}))
        })();
    }, [])

    if (productContext.isFetching) return <View><Text>Loading...</Text></View>

    return (
        <View style={{ paddingTop: 60 }}>
            <MainHeader navigation={navigation} />
            <FlatList
                data={productContext.products}
                horizontal
                renderItem={
                    ({ item }) =>
                        <ProductBox
                            ImageSrc={item.image}
                            Title={item.title}
                            Price={item.price}
                        />
                } 
            >
            </FlatList>
        </View>
    )
}


export default ProductGroup