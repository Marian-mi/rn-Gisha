import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from './src/Styles/Index';

//#region Pages
import Home from './src/Components/Home/Home';
import ProductCategory from './src/Components/ProductCategory/ProductCategory';
import ProductGroup from './src/Components/ProductGroup/ProductGroup';
import Search from './src/Components/Search/Search';
//#endregion

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const NavigationStacks = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name='Home'
                    component={ScreenStack({ screen: Home, name: "HomeStack" })}
                    options={{
                        ...DrawerCommonStyles,
                    }}
                />
                <Drawer.Screen
                    name="ProductCategory"
                    component={ScreenStack({ screen: ProductCategory, name: "ProductCategoryStack" })}
                    options={{
                        ...DrawerCommonStyles,
                    }}
                />
                <Drawer.Screen
                    name="ProductGroup"
                    component={ScreenStack({ screen: ProductGroup, name: "ProductGroupStack" })}
                    options={{
                        ...DrawerCommonStyles,
                    }}
                />
                <Drawer.Screen
                    name="Search"
                    component={ScreenStack({ screen: Search, name: "SearchStack" })}
                    options={{
                        ...DrawerCommonStyles,
                    }}
                />
            </Drawer.Navigator>

        </NavigationContainer>
    )
}

const DrawerCommonStyles = {
    drawerStyle: { top: -5 },
    headerShown: false
}


const ScreenStack = ({ screen, name }) => {
    const ScreenHC = () => (
        <Stack.Navigator>
            <Stack.Screen
                name={name}
                component={screen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )

    return ScreenHC
}

const CustomDrawerContent = (props) => {
    const routes = props.state.routes.map((route) => {
        const { name } = route;
        const { Label, Icon, Hidden } = RoutesConfig[name];

        if (Hidden)
            return null

        return (
            <DrawerItem
                label={Label ?? name}
                onPress={() => props.navigation.navigate(name)}
                icon={Icon ?? (() => { })}
            />
        );
    })

    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            {routes}
        </DrawerContentScrollView>
    )
}

const RoutesConfig = {
    "Home": {
        Label: "خانه",
        Icon: () => <Icon name='home' size={26} color="#5f5f5f" />,
    },
    "ProductCategory": {
        Label: "لیست دسته بندی محصولات",
        Icon: () => <Icon name='format-list-bulleted' size={26} color="#5f5f5f" style={{ transform: [{ rotate: "180deg" }] }} />
    },
    "ProductGroup": {
        Hidden: false,
    },
    "Search": {
        Hidden: true,
    }
}

const DrawerHeader = () => {
    return (
        <View style={DrawerStyles.HeaderContainer}>
            <Icon name='account' color="white" size={26} style={{ marginEnd: 15 }} />
            <Text style={DrawerStyles.HeaderText}>ورود و ثبت نام</Text>
        </View>
    )
}

const DrawerStyles = StyleSheet.create({
    Label: {
        fontSize: 15,
        color: '#5f5f5f',
        fontWeight: "700"
    },
    HeaderContainer: {
        height: 80,
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingStart: 15,
        backgroundColor: Colors.Primary
    },
    HeaderText: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontWeight: "700",
        borderRadius: 8,
        borderColor: 'white',
        color: 'white',
        borderWidth: 1.5,
        textAlign: 'center'
    }
})

export default NavigationStacks