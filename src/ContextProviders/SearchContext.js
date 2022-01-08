import React from 'react';


export const Search = {
    isFetching: true,
    showSortModal: false,
    selectedSort: 1,
    productListColumns: 2,
    setSearch: () => {},
}

const SearchContext = React.createContext(Search)

export default SearchContext 