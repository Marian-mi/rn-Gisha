import React from 'react';


export const Products = {
    isFetching: true,
    products: [],
    products: null,
    setProducts: () => {},
}

const ProductContext = React.createContext(Products)

export default ProductContext 