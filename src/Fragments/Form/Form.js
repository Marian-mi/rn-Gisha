import React, { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { Buttons, Colors, Flex } from '../../Styles/Index'
import InputText from '../Input/TextInput'

const Form = ({ config, submitButtonText }) => {
    const initialState = React.useRef(() => {
        return config.reduce((pv, cv) => {
            pv[cv.name] = {
                value: cv.initialValue ?? "",
            }
            return pv
        }, {})
    }).current

    const initialStateError = React.useRef(() => {
        return config.reduce((pv, cv) => {
            pv[cv.name] = ""
            return pv
        }, {})
    }).current

    const [formState, setFormState] = useState(initialState)
    const [errorMessages, setErrorMessages] = useState(initialStateError)

    const setState = ({ name, data }) => {
        setFormState(ps => {
            const newState = ps
            newState[name].value = data
            return newState
        })
    }

    const submitForm = () => {
        let isValid = true;

        config.forEach(({ name, required, validations, label }) => {
            const data = formState[name].value

            if (required && data?.length === 0) {
                isValid = false
                setErrorMessages(ps => ({...ps, ...ps[name] = `وارد کردن ${label} الزامی است.`}))

                return 
            }

            if (validations?.length > 0) {
                const { isValid, errorMessage } = Validator(validations, data)

                if (!isValid) {
                    setErrorMessages(ps => ({...ps, ...ps[name] = errorMessage}))

                    return
                }
                else if (errorMessages[name]?.length > 0) {
                    console.log('valid')
                    setErrorMessages(ps => ({...ps, ...ps[name] = ""}))

                }
            }
        })

        if (!isValid) return
    }

    const BuildForm = () => {
        const { row: rowsCount, justify } = config.sort((a, b) => a.row < b.row)[0]

        let elements = []

        console.log('object1')
        for (let i = 0; i < rowsCount; i++) {
            let row = []
            const rowElements = config.filter(x => x.row === i + 1).sort((a, b) => a.displayOrder > b.displayOrder)

            rowElements.forEach(({ type, name, width, label }, ind) => row.push(
                InputFactory({
                    type, name, width, setState, label, error: errorMessages
                })
            ))

            const elemetsWidth = rowElements.reduce((pv, cv) => (pv + cv.width), 0)

            if (elemetsWidth < 12) {
                const emptySize = 12 - elemetsWidth
                if (justify === 'center' && emptySize % 2 === 0) {
                    row.unshift(<View style={{ flex: emptySize / 2 }} />)
                    row.push(<View style={{ flex: emptySize / 2 }} />)
                }
                else {
                    row.push(<View style={{ flex: 12 - elemetsWidth }} />)
                }
            }

            elements.push(
                <View style={[Flex.Row, { padding: 15 }]}>
                    {row}
                </View>
            )
        }

        return elements ?? <View />
    }

    return (
        <View>
            {BuildForm()}
            <View style={[Flex.Row, Flex.Centered]}>
                <Pressable
                    onPress={() => submitForm()}
                    style={[Buttons.Primary, { marginTop: 15 }]}
                >
                    <Text style={{ fontFamily: "Samim", fontSize: 13, color: "#666"}}>{submitButtonText}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const InputFactory = ({ type, name, width, setState, label, error }) => {
    switch (type) {
        case "text":
            return (
                <InputText
                    label={label}
                    wrapperStyles={{ flex: width }}
                    setInput={(data) => setState({ name, data })}
                    validate={error[name] ?? false}
                />)
    }
}



const Validator = (types, data, additionalData) => {
    let isValid = true
    let errorMessage = ""
    console.log(types)
    types.forEach(type => {
        if (!isValid)
            return

        const [typeId, val] = type.includes('-') ? type.split('-') : type

        switch (typeId) {
            case ValidationTypes.PhoneNumber:
                isValid = data.match(/^(\+98|0098|98|0)?9\d{9}$/)
                errorMessage = ErrorMessages[ValidationTypes.PhoneNumber]
                break
            case ValidationTypes.NationalCode:
                isValid = data.match(/^(\+98|0098|98|0)?9\d{9}$/)
                errorMessage = ErrorMessages[ValidationTypes.NationalCode]
                break
            case ValidationTypes.Length():
                console.log('hola')
                isValid = data.length >= val
                errorMessage = ErrorMessages.Length(val)
                break
        }
    });

    return {
        isValid, errorMessage
    }
}

export class ValidationTypes {
    static PhoneNumber = 0
    static NationalCode = 1

    static Length = (len) => {
        return len ? `2-${len}` : "2"
    }
}

const ErrorMessages = {
    [ValidationTypes.PhoneNumber]: "شماره تماس وارد شده نامعتبر است",
    [ValidationTypes.NationalCode]: "کد ملی وارد شده نا معتبر است",
    Length: (len) => `حداقل کاراکتر مجاز ${len} میباشد`,
}


export default Form


