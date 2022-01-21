import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BoxStyles, Colors, Flex } from './src/Styles/Index';

//#region Pages
import Home from './src/Components/Home/Home';
import ProductCategory from './src/Components/ProductCategory/ProductCategory';
import Search from './src/Components/Search/Search';
import Test from './src/Components/Test/Test';
import ProductPage from './src/Components/ProductPage/ProductPage';
import AppContext from './src/ContextProviders/AppContext';
import Auth from './src/Components/Auth/Auth';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { User } from './model/person';
//#endregion



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationStacks = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen
                    name="Drawer"
                    component={ScreenStack}
                    options={{
                        drawerStyle: { top: -5 },
                        headerShown: false,
                    }}
                />
            </Drawer.Navigator>

        </NavigationContainer>
    );
};

const StackOptions = {
    headerShown: false,
};

const ScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={StackOptions} />
            <Stack.Screen name="ProductCategory" component={ProductCategory} options={StackOptions} />
            <Stack.Screen name="Search" component={Search} options={StackOptions} />
            <Stack.Screen name="ProductPage" component={ProductPage} options={StackOptions} />
            <Stack.Screen name="Test" component={Test} options={StackOptions} />
            <Stack.Screen name="Auth" component={Auth} options={StackOptions} />
        </Stack.Navigator>
    );
};

const CustomDrawerContent = props => {
    const { content, isFetching, isAuthenticated , setApp } = useContext(AppContext)
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <DrawerHeader />
            </View>
            <View style={[DrawerStyles.Section]}>
                <DrawerItem
                    label={() => <Text style={DrawerStyles.Label}>خانه</Text>}
                    onPress={() => props.navigation.navigate('Home')}
                    icon={() => <Icon name="home" size={26} color="#5f5f5f" />}
                />
                <DrawerItem
                    label={() => <Text style={DrawerStyles.Label}>لیست دسته بندی محصولات</Text>}
                    onPress={() => props.navigation.navigate('ProductCategory')}
                    icon={() => (
                        <Icon
                            name="format-list-bulleted"
                            size={26}
                            color="#5f5f5f"
                            style={{
                                transform: [
                                    {
                                        rotate: '180deg',
                                    },
                                ],
                            }}
                        />
                    )}
                />
            </View>
            <View style={[DrawerStyles.Section]}>
                <DrawerItem
                    label={() => (
                        <View>
                            <Text style={DrawerStyles.Label}>سبد خرید</Text>
                            <Text style={[DrawerStyles.Counter]}>۰</Text>
                        </View>
                    )}
                    icon={() => <Icon name="cart" size={26} color="#5f5f5f" />}
                />
            </View>
            <View style={[DrawerStyles.Section]}>
                {isFetching === false && (
                    content.filter(x => x.ContentType === 2).slice(0, 4).map(({ Title, ContentID }) => (
                        <DrawerItem
                            label={() => <Text style={DrawerStyles.Label}>{Title}</Text>}
                            onPress={() => props.navigation.navigate('Search', { LinkID: ContentID })}
                            icon={() => <Icon name="star" size={26} color="#5f5f5f" />}
                            key={ContentID}
                        />
                    ))
                )}
            </View>
            <View style={{ paddingTop: 30 }}>
                <DrawerItem
                    label={() => <Text style={DrawerStyles.Label}>سوالات متداول</Text>}
                    icon={() => <Icon name="crosshairs-question" size={26} color="#5f5f5f" />}
                />
                <DrawerItem
                    label={() => <Text style={DrawerStyles.Label}>درباره ما</Text>}
                    icon={() => <Icon name="information" size={26} color="#5f5f5f" />}
                />
                {isAuthenticated && (
                    <DrawerItem
                        style={{ backgroundColor: "rgba(200,0,0,0.1)"}}
                        label={() => <Text style={DrawerStyles.Label}>خروج</Text>}
                        icon={() => <Icon name="logout" size={26} color="#5f5f5f" />}
                        onPress={() => LogOut(setApp)}
                    />
                )}
            </View>
        </DrawerContentScrollView>
    );
};

const LogOut = (setApp) => {
    User.currentUser.HandleAuth(false)
    User.currentUser = null
    setApp(ps => ({...ps, isAuthenticated: false}))
}

const DrawerHeader = () => {
    const { isAuthenticated, username } = useContext(AppContext)
    const navigation = useNavigation()
    return (
        <Pressable style={DrawerStyles.HeaderContainer} onPress={() => navigation.navigate("Auth")}>
            {isAuthenticated ? <View><Text style={[DrawerStyles.Label, { color: 'white'}]}>{username}</Text></View>
                : (
                    <>
                        <Icon name="account" color="white" size={26} style={{ marginEnd: 15 }} />
                        <Text style={[DrawerStyles.HeaderText]}>ورود و ثبت نام</Text>
                    </>
                )}
        </Pressable>
    );
};

const DrawerStyles = StyleSheet.create({
    Label: {
        fontSize: 13,
        color: '#5f5f5f',
        fontFamily: "Samim",
    },
    HeaderContainer: {
        height: 80,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingStart: 15,
        backgroundColor: Colors.Primary,
    },
    HeaderText: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        borderColor: 'white',
        color: 'white',
        borderWidth: 1.5,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: "Samim",
    },
    Section: {
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    Counter: {
        width: 30,
        top: -5,
        height: 30,
        position: 'absolute',
        right: -30,
        borderRadius: 50,
        backgroundColor: "#bbb",
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: "Samim",
        ...BoxStyles.Shadow
    }
});

export default NavigationStacks;
