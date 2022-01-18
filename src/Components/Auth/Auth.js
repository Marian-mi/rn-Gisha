import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Form, { ValidationTypes } from '../../Fragments/Form/Form'
import MainHeader from '../../Fragments/Headers/MainHeader'
import { Colors } from '../../Styles/Index'


const Auth = () => {
    return (
        <View style={{ paddingTop: 60 }}>
            <MainHeader />
            <View style={Styles.Wrapper}>
                <Text style={Styles.Title}>وارد حساب کاربری خود شوید</Text>
                <Form
                    config={formFields}
                    submitButtonText={"وارد شوید"}
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
        name: "PhoneNumber",
        initialValue: "",
        validations: [ValidationTypes.Length(12)],
        required: true,
        width: 8,
        justify: "center",
        row: 1,
        displayOrder: 1,
    },
    {
        type: "text",
        label: "رمز عبور",
        name: "ٔNationalCode",
        initialValue: "",
        validations: [ValidationTypes.Length(7)],
        required: true,
        width: 8,
        justify: "center",
        row: 2,
        displayOrder: 2,
    },
]


export default Auth