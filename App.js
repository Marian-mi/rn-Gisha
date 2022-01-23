//#region Core Dependecies
import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
//#endregion


// Other components
import NavigationStacks from './Navigation';
import MainContextProvider from './src/ContextProviders/Index';
import axios from 'axios'
import { ReadUser } from './src/Realm/User';
import AppContext from './src/ContextProviders/AppContext';
import { UserSchema } from './src/Components/Auth/Auth';
import reactotron from 'reactotron-react-native';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import { Platform } from 'react-native'
import { Database, Q } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './model/schema'
import migrations from './model/migrations'
import AppUser, { User } from './model/person';

if (__DEV__) {
    import('./src/reactotronconfig.js').then(() => console.log('Reactotron Configured'))
}

const adapter = new SQLiteAdapter({
    schema,
    migrations,
    jsi: false,
    onSetUpError: error => {
    },
})

export const database = new Database({
    adapter,
    modelClasses: [
        AppUser
    ],
})

const App = () => {
    const { setApp, isAuthenticated } = useContext(AppContext)
    useEffect(() => {
        ; (async () => {
            if (!isAuthenticated) {
                const { result, username } = await User.authCurrentUser()

                if (result) {
                    setApp((ps) => ({
                        ...ps,
                        username: username,
                        isAuthenticated: true,
                    }))
                }
            }
        })();
    }, [])

    return (
        <NavigationStacks />
    );
};

export const Axios = axios.create({
    baseURL: "http://192.168.1.104:8182/api/shop",
    headers: { "Content-Type": "application/json; charset=utf-8" }
})

export default App;
