import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import SearchContext from '../../ContextProviders/SearchContext'
import TitledHeader from '../../Fragments/Headers/TitledHeader'
import SearchControls from '../../Fragments/Search/Contorls'
import Sorts from '../../Fragments/Search/SortsModal'


const Search = ({ navigation }) => {
    const searchCtx = useContext(SearchContext);

    return (
        <View style={{ paddingTop: 55 }}>
            <TitledHeader navigation={navigation} title={"جست و جو"} />
            <SearchControls />
            <Sorts />
        </View>
    )
}


export default Search