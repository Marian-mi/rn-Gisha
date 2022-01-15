import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { HomeProvider } from './HomeContext'
import { CategoryProvider } from './CategoryContext'
import ProductContext, { Products } from './ProductContext'
import SearchContext, { Search } from './SearchContext'

const MainContextProvider = ({ children }) => {
    const [products, setProducts] = useState(Products)
    const [search, setSearch] = useState(Search)

    return (
        <HomeProvider>
            <CategoryProvider>
                <ProductContext.Provider value={{ ...products, setProducts }} >
                    <SearchContext.Provider value={{ ...search, setSearch }}>
                        {children}
                    </SearchContext.Provider>
                </ProductContext.Provider>
            </CategoryProvider>
        </HomeProvider>
    )
}



export default MainContextProvider 