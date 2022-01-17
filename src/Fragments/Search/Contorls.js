import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchContext from '../../ContextProviders/SearchContext'
import { Colors, Flex } from '../../Styles/Index'
import { SortsData } from './SortsModal'


const SearchControls = () => {
    const searchCtx = useContext(SearchContext)
    const { setSearch, selectedSort, productListColumns } = searchCtx

    const changeLayout = () => {
        const layout = productListColumns === 1 ? 2 : 1
        setSearch({ ...searchCtx, productListColumns: layout })
    }

    return (
        <View style={[Flex.Row, Styles.Container, Styles.Shadow]}>
            <Pressable style={{ flex: 5, ...Flex.Row, ...Styles.Wrapper }}>
                <Icon name="filter-variant" size={22} color="#747474" style={{ flex: 1, marginEnd: 15 }} />
                <View style={{ flex: 3, display: 'flex' }}>
                    <Text style={Styles.Label}>فیلتر کردن</Text>
                    <Text style={Styles.Small}>رنگ, نوع, قیمت...</Text>
                </View>
            </Pressable>
            <Pressable android_ripple={{ color: "rgba(0,0,0,0,2)" }} style={{ flex: 5, ...Flex.Row, ...Styles.Wrapper }} onPress={() => setSearch({ ...searchCtx, showSortModal: true })}>
                <Icon name="sort-variant" size={22} color="#747474" style={{ flex: 1, marginEnd: 15 }} />
                <View style={{ flex: 3, display: 'flex' }}>
                    <Text style={Styles.Label}>مرتب سازی</Text>
                    <Text style={Styles.Small}>{SortsData.find(x => x.ID === selectedSort)?.Title}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 2, ...Flex.Centered }} onPress={changeLayout} android_ripple={{ color: "rgba(0,0,0,0.2)"}}>
                {
                    productListColumns === 2
                        ? <Icon name="format-list-bulleted" size={22} color="#747474" />
                        : <Icon name="view-agenda-outline" size={22} color="#747474" />
                }
            </Pressable>
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        height: 60,
        backgroundColor: 'white',
    },
    Shadow: {
        elevation: 25,
    },
    Label: { 
        fontSize: 14, 
        flex: 2, 
        fontFamily: "Samim-Bold",
    },
    Small: {
        fontSize: 10, 
        fontFamily: "Samim",
    },
    Icon: {
        fontSize: 22,
        color: "#747474"
    },
    Wrapper: {
        padding: 10,
        alignItems: 'center',
        borderRightColor: "#dddddd",
        borderRightWidth: 1
    }
})

export default SearchControls