import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BoxStyles, Colors, Flex } from './src/Styles/Index';

//#region Pages
import Home from './src/Components/Home/Home';
import ProductCategory from './src/Components/ProductCategory/ProductCategory';
import Search from './src/Components/Search/Search';
import Test from './src/Components/Test/Test';
import ProductPage from './src/Components/ProductPage/ProductPage';
import HomeContext from './src/ContextProviders/HomeContext';
//#endregion

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

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
        </Stack.Navigator>
    );
};

const CustomDrawerContent = props => {
    const { content, isFetching } = useContext(HomeContext)
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <DrawerHeader />
            </View>
            <View style={[DrawerStyles.Section]}>
                <DrawerItem
                    label={() => <Text>خانه</Text>}
                    onPress={() => props.navigation.navigate('Home')}
                    icon={() => <Icon name="home" size={26} color="#5f5f5f" />}
                />
                <DrawerItem
                    label={() => <Text>لیست دسته بندی محصولات</Text>}
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
                            <Text>سبد خرید</Text>
                            <Text style={[DrawerStyles.Counter]}>۰</Text>
                        </View>
                    )}
                    onPress={() => props.navigation.navigate('Home')}
                    icon={() => <Icon name="cart" size={26} color="#5f5f5f" />}
                />
            </View>
            <View style={[DrawerStyles.Section]}>
                {isFetching === false && (
                    content.map(({ Title, ContentID, Items }) => (
                        <DrawerItem
                            label={() => <Text>{Title}</Text>}
                            onPress={() => props.navigation.navigate('Search', { LinkID: ContentID })}
                            icon={() => <Icon name="star" size={26} color="#5f5f5f" />}
                        />
                    ))
                )}
            </View>
            <View style={{ paddingTop: 30 }}>
                <DrawerItem
                    label={() => <Text>سوالات متداول</Text>}
                    icon={() => <Icon name="crosshairs-question" size={26} color="#5f5f5f" />}
                />
                <DrawerItem
                    label={() => <Text>درباره ما</Text>}
                    icon={() => <Icon name="information" size={26} color="#5f5f5f" />}
                />
            </View>
        </DrawerContentScrollView>
    );
};

const DrawerHeader = () => {
    return (
        <View style={DrawerStyles.HeaderContainer}>
            <Icon name="account" color="white" size={26} style={{ marginEnd: 15 }} />
            <Text style={DrawerStyles.HeaderText}>ورود و ثبت نام</Text>
        </View>
    );
};

const DrawerStyles = StyleSheet.create({
    Label: {
        fontSize: 15,
        color: '#5f5f5f',
        fontWeight: '700',
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
        fontWeight: '700',
        borderRadius: 8,
        borderColor: 'white',
        color: 'white',
        borderWidth: 1.5,
        textAlign: 'center',
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
        ...BoxStyles.Shadow
    }
});

export default NavigationStacks;
