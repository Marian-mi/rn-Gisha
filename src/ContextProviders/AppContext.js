import React, { useState } from 'react';


export const App = {
    slider: [],
    text: [],
    banner: [],
    gallery: [],
    content: [],
    setApp: () => { },
    isFetching: true,
    username: null,
    isAuthenticated: false,
    domain: "http://192.168.1.104:8182"
}


const AppContext = React.createContext(App)

export const AppProvider = ({ children }) => {

    const [app, setApp] = useState(App)

    return (
        <AppContext.Provider value={{ ...app, setApp }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext 