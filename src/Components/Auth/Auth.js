import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import reactotron from 'reactotron-react-native'
import { database } from '../../../App'
import Form, { ValidationTypes } from '../../Fragments/Form/Form'
import MainHeader from '../../Fragments/Headers/MainHeader'
import DotsLoader from '../../Fragments/Loaders/DotsLoader'
import { CreateUser } from '../../Realm/User'
import { Colors } from '../../Styles/Index'

import { Q } from '@nozbe/watermelondb'
import { User } from '../../../model/person'
import AppContext from '../../ContextProviders/AppContext'
import { useNavigation } from '@react-navigation/native'

const Auth = () => {
    const [isFetching, setIsFetching] = useState(false)
    const { isAuthenticated, setApp } = useContext(AppContext)
    const navigation = useNavigation()

    const login = async (data) => {
        try {
            const user = (await User.getBy(data.Username))[0] ?? null

            if (user) {
                console.log('found');
                user.HandleAuth(true)
                User.currentUser = user
                setApp(ps => ({ ...ps, isAuthenticated: true, username: user.username }))
            }
            else {
                const newUser = await User.createUser(data.Username)
                if (newUser)
                    setApp(ps => ({ ...ps, isAuthenticated: true, username: newUser.username }))
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (isAuthenticated)
            navigation.navigate("Home")
    }, [isAuthenticated])

    if (isFetching) return <DotsLoader />

    return (
        <View style={{ paddingTop: 60 }}>
            <MainHeader />
            <View style={Styles.Wrapper}>
                <Text style={Styles.Title}>وارد حساب کاربری خود شوید</Text>
                <Form
                    config={formFields}
                    submitButtonText={"وارد شوید"}
                    onSubmit={(data) => login(data)}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        paddingVertical: 30,
        marginHorizontal: 25,
        marginTop: 50,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 8,
    },
    Title: {
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: "Samim"
    }
})

const formFields = [
    {
        type: "text",
        label: "نام کاربری",
        name: "Username",
        initialValue: "",
        validations: [ValidationTypes.Length(8)],
        required: true,
        width: 8,
        justify: "center",
        row: 1,
        displayOrder: 1,
    },
    {
        type: "text",
        label: "رمز عبور",
        name: "Password",
        initialValue: "",
        validations: [ValidationTypes.Length(7)],
        required: true,
        width: 8,
        justify: "center",
        row: 2,
        displayOrder: 2,
    }
]


export default Auth