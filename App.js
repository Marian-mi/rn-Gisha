//#region Core Dependecies
import 'react-native-gesture-handler';
import React from 'react';
//#endregion


// Other components
import NavigationStacks from './Navigation';
import MainContextProvider from './src/ContextProviders/Index';
import axios from 'axios'

if(__DEV__) {
    import('./src/reactotronconfig.js').then(() => console.log('Reactotron Configured'))
}
 
const App = () => {
    return (
        <MainContextProvider>
            <NavigationStacks />
        </MainContextProvider>
    );
};

export const Axios = axios.create({
    baseURL: "https://192.168.1.104:8182/api/shop",
    headers: { "Content-Type": "application/json; charset=utf-8"}
})

export default App;
