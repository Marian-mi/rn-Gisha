import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import ProductBox from '../../Fragments/Product/ProductBox'
import ProductContext, { Products } from '../../Providers/ProductContext'


const ProductGroup = ({ navigation }) => {
    const [products, setProducts] = useState(Products)

    useEffect(() => {
        ; (async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();

            setProducts({ products: data, isFetching: false })
        })();
    }, [])

    if (products.isFetching) return <View><Text>Loading...</Text></View>

    return (
        <View>
            <ProductContext.Provider value={products}>
                <FlatList
                    data={products.products}
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
            </ProductContext.Provider>
        </View>
    )
}


export default ProductGroup