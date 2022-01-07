//#region Core Dependecies
import 'react-native-gesture-handler';
import React from 'react';
//#endregion


// Other components
import NavigationStacks from './Navigation';
import MainContextProvider from './src/ContextProviders/Index';

 
const App = () => {
    return (
        <MainContextProvider>
            <NavigationStacks />
        </MainContextProvider>
    );
};

export default App;
