/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AApp from './App';
import { name as appName } from './app.json';
import React from 'react';
import MainContextProvider from './src/ContextProviders/Index';

const App = () => {
    return (
        <MainContextProvider><AApp /></MainContextProvider>
    )
}

AppRegistry.registerComponent(appName, () => App);
