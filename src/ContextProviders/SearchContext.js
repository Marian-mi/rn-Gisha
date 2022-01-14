import React from 'react';


export const Search = {
    isFetching: true,
    showSortModal: false,
    selectedSort: 1,
    productListColumns: 2,
    results: null,
    setSearch: () => {},
}

const SearchContext = React.createContext(Search)

export default SearchContext 