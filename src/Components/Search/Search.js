import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Axios } from '../../../App'
import { DynamicLink } from '../../config'
import ProductContext from '../../ContextProviders/ProductContext'
import SearchContext from '../../ContextProviders/SearchContext'
import TitledHeader from '../../Fragments/Headers/TitledHeader'
import ProductBox from '../../Fragments/Product/ProductBox'
import SearchControls from '../../Fragments/Search/Contorls'
import Sorts from '../../Fragments/Search/SortsModal'


const Search = ({ navigation, route }) => {
    const productCtx = useContext(ProductContext);
    const searchCtx = useContext(SearchContext)

    const { LinkID, Title } = route.params

    const { products } = productCtx
    const { productListColumns, results, setSearch } = searchCtx

    useEffect(() => {
        ; (async () => {
            try {
                const response = await Axios.post("/af/find", JSON.stringify({ ProductGroupId: LinkID, Take: 30 }))
                const data = await response.data

                setSearch({ ...searchCtx, results: data.Products })
            }
            catch(err) {
                console.log(err)
            }
        })();
    }, [])

    return (
        <View style={{ paddingTop: 55 }}>
            <TitledHeader navigation={navigation} title={Title ?? "جست و جو"} />
            <SearchControls />
            <Sorts />
            <FlatList
                key={productListColumns}
                data={results}
                numColumns={productListColumns}
                renderItem={({ item }) => (
                    <ProductBox
                        Title={item.Title}
                        ImageSrc={"http://192.168.1.104:8182" + item.PicturePath + item.PictureExt}
                        Price={item.NewPrice}
                        key={item.ID}
                        FlexBasis={`${(100 / productListColumns) - 5}%`}
                        Style={productListColumns === 1 ? "flat" : ""}
                        ID={item.ID}
                    />
                )}
            />
        </View>
    )
}


export default Search