import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { View, Text, useWindowDimensions, Pressable, StyleSheet } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { Axios } from '../../../App'
import CategoryContext from '../../ContextProviders/CategoryContext'
import TitledHeader from '../../Fragments/Headers/TitledHeader'
import EmptyList from '../../Fragments/Informatic/EmtyList'
import DotsLoader from '../../Fragments/Loaders/DotsLoader'
import SubCategory from './SubCategory'

const ProductCategory = ({ navigation }) => {
    const dimensions = useWindowDimensions();

    const categoryCtx = useContext(CategoryContext)
    const { setCategory, main, isFetching } = categoryCtx

    useLayoutEffect(() => {
        setCategory((ps) => ({ ...ps, isFetching: true }))
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await Axios.post("/category/getby", { SelectType: 0 })
                const data = await response.data

                setCategory((ps) => ({ ...ps, main: data, isFetching: false }))
                setRoutes(data.map(({ Title, ID }) => (
                    { title: Title, key: Title }
                )))
            }
            catch (err) {

            }
        })();
    }, [])


    const scenes = SceneMap(main && main.reduce((pv, cv) => {
        pv[cv.Title] = () => <SubCategory mainID={cv.ID} /> 
        return pv
    }, {}))


    const [index, setIndex] = useState(0)
    const [routes, setRoutes] = useState([])

    const renderTabs = useCallback(
        (props) => (
            <TabBar
                {...props}
                scrollEnabled
                style={{ backgroundColor: '#de1f26', height: 60 }}
                labelStyle={{ fontFamily: 'Samim', fontSize: 13}}
                indicatorStyle={{ backgroundColor: 'white', height: 2 }}
                pressColor='#dedede'
            />
        ),
        [routes],
    )

    if (isFetching) return <DotsLoader />

    if (!main) return <EmptyList text={"دسته بندی وجود ندارد!"} />

    return (
        <>
            <TitledHeader title="دسته بندی محصولات" navigation={navigation} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={scenes}
                renderTabBar={renderTabs}
                onIndexChange={setIndex}
                initialLayout={{ width: dimensions.width }}
                style={{ paddingTop: 55 }}
                swipeEnabled
                layoutDirection='locale'
                transitionStyle='scroll'
            />
        </>
    )
}

export default ProductCategory