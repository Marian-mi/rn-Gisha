//#region Core dependecies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//#endregion

//#region Pages
import Home from './src/Components/Home/Home';
import ProductGroup from './src/Components/ProductGroup/ProductGroup';
//#endregion

// Other components
import HomeHeader from './src/Fragments/Headers/MainHeader';

const Stack = createNativeStackNavigator();
 
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: (props) => <HomeHeader {...props} />,
                        headerStyle: { backgroundColor: '#de1f26' },
                        
                    }} 
                />
                <Stack.Screen
                    name="ProductGroup"
                    component={ProductGroup}
                    options={{
                        headerTitle: (props) => <HomeHeader {...props} />,
                        headerStyle: { backgroundColor: '#de1f26' },
                        headerBackVisible: false
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
