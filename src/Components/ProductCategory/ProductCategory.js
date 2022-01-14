import React, { useCallback, useContext, useMemo, useState } from 'react'
import { View, Text, useWindowDimensions, Pressable, StyleSheet } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import ProductContext from '../../ContextProviders/ProductContext'
import MainHeader from '../../Fragments/Headers/MainHeader'
import TitledHeader from '../../Fragments/Headers/TitledHeader'
import SubCategory from './SubCategory'

const ProductCategory = ({ navigation }) => {
    const dimensions = useWindowDimensions();

    const productContext = useContext(ProductContext)

    const scenes = useMemo(() =>
        SceneMap({
            first: () => <SubCategory SubCategoryList={productContext.products} />,
            second: () => <View children={<Text>2</Text>} />,
            third: () => <View children={<Text>3</Text>} />,
        })
        , [productContext.products])

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'عنوان مورد نظر' },
        { key: 'second', title: 'عنوان مورد نظر' },
        { key: 'third', title: 'عنوان مورد نظر' }
    ])

    const renderTabs = useCallback(
        (props) => (
            <TabBar
                {...props}
                scrollEnabled
                style={{ backgroundColor: '#de1f26' }}
                indicatorStyle={{ backgroundColor: 'white', height: 2 }}
                pressColor='#dedede'
            />
        ),
        [routes],
    )

    return (
        <>
            <TitledHeader title="دسته بندی محصولات" navigation={navigation} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={scenes}
                renderTabBar={renderTabs}
                onIndexChange={setIndex}
                initialLayout={{ width: dimensions.width }}
                style={{ paddingTop: 55}}
                swipeEnabled
                layoutDirection='locale'
                transitionStyle='scroll'
            />
        </>
    )
}

export default ProductCategory