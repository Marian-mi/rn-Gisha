import React, { useState } from 'react';


export const Home = {
    slider: [],
    text: [],
    banner: [],
    gallery: [],
    setHome: () => {},
    isFetching: true,
}


const HomeContext = React.createContext(Home)

export const HomeProvider = ({ children }) => {

    const [home, setHome] = useState(Home)

    return (
        <HomeContext.Provider value={{ ...home, setHome}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContext 