import React from 'react';


export const Products = {
    isFetching: true,
    products: []
}

const ProductContext = React.createContext(Products)

export default ProductContext