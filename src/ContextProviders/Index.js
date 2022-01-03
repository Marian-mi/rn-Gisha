import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ProductContext, { Products } from './ProductContext'

const MainContextProvider = ({ children }) => {
    const [products, setProducts] = useState(Products)

    return (
        <ProductContext.Provider value={{...products, setProducts}} > 
            {children}
        </ProductContext.Provider>
    )
}


export default MainContextProvider 