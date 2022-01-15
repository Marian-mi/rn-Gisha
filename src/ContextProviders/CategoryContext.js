import React, { useState } from 'react';


export const Category = {
    main: [],
    setCategory: () => {},
    isFetching: true,
}


const CategoryContext = React.createContext(Category)

export const CategoryProvider = ({ children }) => {

    const [category, setCategory] = useState(Category)

    return (
        <CategoryContext.Provider value={{ ...category, setCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext 