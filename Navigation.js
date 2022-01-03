import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { View, Text } from 'react-native'


//#region Pages
import Home from './src/Components/Home/Home';
import ProductCategory from './src/Components/ProductCategory/ProductCategory';
import ProductGroup from './src/Components/ProductGroup/ProductGroup';
//#endregion

const Stack = createNativeStackNavigator();

const NavigationStacks = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ProductGroup"
                    component={ProductGroup}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ProductCategory"
                    component={ProductCategory}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default NavigationStacks