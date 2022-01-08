import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ProductContext from '../../ContextProviders/ProductContext'
import SearchContext from '../../ContextProviders/SearchContext'
import TitledHeader from '../../Fragments/Headers/TitledHeader'
import ProductBox from '../../Fragments/Product/ProductBox'
import SearchControls from '../../Fragments/Search/Contorls'
import Sorts from '../../Fragments/Search/SortsModal'


const Search = ({ navigation }) => {
    const productCtx = useContext(ProductContext);
    const searchCtx = useContext(SearchContext)

    const { products } = productCtx
    const { productListColumns } = searchCtx

    return (
        <View style={{ paddingTop: 55 }}>
            <TitledHeader navigation={navigation} title={"جست و جو"} />
            <SearchControls />
            <Sorts />
            <FlatList
                key={productListColumns}
                data={products}
                numColumns={productListColumns}
                renderItem={({ item }) => (
                    <ProductBox
                        Title={item.title}
                        ImageSrc={item.image}
                        Price={item.price}
                        key={item.id}
                        FlexBasis={`${(100 / productListColumns) - 5}%`}
                        Style={productListColumns === 1 ? "flat" : ""}
                    />
                )}
            />
        </View>
    )
}


export default Search