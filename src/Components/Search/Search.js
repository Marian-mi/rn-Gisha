import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Axios } from '../../../App'
import { AppHelper, DynamicLink } from '../../config'
import ProductContext from '../../ContextProviders/ProductContext'
import SearchContext from '../../ContextProviders/SearchContext'
import TitledHeader from '../../Fragments/Headers/TitledHeader'
import EmptyList from '../../Fragments/Informatic/EmtyList'
import DotsLoader from '../../Fragments/Loaders/DotsLoader'
import ProductBox from '../../Fragments/Product/ProductBox'
import SearchControls from '../../Fragments/Search/Contorls'
import Sorts from '../../Fragments/Search/SortsModal'


const Search = ({ navigation, route }) => {
    const productCtx = useContext(ProductContext);
    const searchCtx = useContext(SearchContext)

    const { LinkID, Title } = route.params

    const { products } = productCtx
    const { productListColumns, results, setSearch, isFetching } = searchCtx

    useLayoutEffect(() => {
        setSearch((ps) => ({ ...ps, isFetching: true }))
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await Axios.post("/af/find", JSON.stringify({ ProductGroupId: LinkID, Take: 30 }))
                const data = await response.data

                setSearch({ ...searchCtx, results: data.Products, isFetching: false })
            }
            catch (err) {
                setSearch((ps) => ({...ps, isFetching: false}))
                console.log(err)
            }
        })();
    }, [])

    if (isFetching) return <DotsLoader />

    if (results?.length === 0 || !results) return (
        <View style={{ paddingTop: 55 }}>
            <TitledHeader navigation={navigation} title={Title ?? "جست و جو"} />
            <EmptyList text={"محصولی پیدا نشد!"}/>
        </View>
    )

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
                        ImageSrc={AppHelper.MapToServerPath(item.PicturePath + item.PictureExt)}
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