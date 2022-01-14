import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { HomeProvider } from './HomeContext'
import ProductContext, { Products } from './ProductContext'
import SearchContext, { Search } from './SearchContext'

const MainContextProvider = ({ children }) => {
    const [products, setProducts] = useState(Products)
    const [search, setSearch] = useState(Search)

    return (
        <HomeProvider>
            <ProductContext.Provider value={{ ...products, setProducts }} >
                <SearchContext.Provider value={{ ...search, setSearch }}>
                    {children}
                </SearchContext.Provider>
            </ProductContext.Provider>
        </HomeProvider>
    )
}



export default MainContextProvider 