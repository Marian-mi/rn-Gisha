import React, { useContext, useState } from 'react'
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import SearchContext from '../../ContextProviders/SearchContext'
import { Flex } from '../../Styles/Index'
import RadioButton from '../Input/RadioButton'

export const SortsData = [
    {
        ID: 1,
        Title: "وضعیت"
    },
    {
        ID: 2,
        Title: "پر بازدیدترین",
    },
    {
        ID: 3,
        Title: "پر فروشترین"
    },
    {
        ID: 4,
        Title: "جدیدترین",
    },
    {
        ID: 5,
        Title: "ازرانترین",
    },
    {
        ID: 6,
        Title: "گرانترین"
    }
]

const Sorts = () => {
    const searchCtx = useContext(SearchContext);
    const { showSortModal, setSearch, selectedSort } = searchCtx

    return (
        <Modal
            visible={showSortModal}
            onRequestClose={() => setSearch({ ...searchCtx, showSortModal: false })}
            animationType='fade'
            transparent={true}
        >
            <Pressable 
            style={[Flex.Centered, {flex: 1 , backgroundColor: "rgba(0, 0, 0, 0.5)"}]}
            onPress={() => setSearch({ ...searchCtx, showSortModal: false })}
            >
                <View style={Styles.List}>
                    {SortsData.map((item) => (
                        <RadioButton
                            key={item.ID}
                            Title={item.Title}
                            Index={item.ID}
                            Selected={selectedSort === item.ID}
                            SetSelected={(ind) => setSearch({ ...searchCtx, selectedSort: ind })}
                        />
                    ))}
                </View>
            </Pressable>
        </Modal>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {

    },
    List: {
        borderRadius: 8,
        height: 250,
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 40,
        display: "flex",
        justifyContent: 'center',
        shadowColor: "rgb(0,0,0)",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius:5.84,
        elevation: 10,
    }
})

export default Sorts