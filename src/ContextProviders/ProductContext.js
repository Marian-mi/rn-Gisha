import React from 'react';


export const Products = {
    isFetching: true,
    products: [],
    setProducts: () => {},
}

const ProductContext = React.createContext(Products)

export default ProductContext 