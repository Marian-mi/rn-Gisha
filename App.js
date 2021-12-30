//#region Core dependecies
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//#endregion

//#region Pages
import Home from './src/Components/Home/Home';
//#endregion

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="/Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
