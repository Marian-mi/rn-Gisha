//#region Core Dependecies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
