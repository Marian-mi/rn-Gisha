import React, { useRef, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native'
import { Colors, Flex } from '../../Styles/Index'


const InputText = ({ setInput, label, wrapperStyles, validate }) => {
    const [focused, setFocused] = useState(false)
    const [empty, setEmpty] = useState(true)
    const animatedVal = useRef(new Animated.Value(0)).current

    const animation = Animated.timing(animatedVal, {
        duration: 200,
        toValue: 1,
        useNativeDriver: true,
    })

    const reverse = Animated.timing(animatedVal, {
        duration: 200,
        toValue: 0,
        useNativeDriver: true,
    })

    const changeFocus = (val) => {
        setFocused(val)
        if (val) {
            animation.start()
        }
        else if (empty) {
            reverse.start()
        }
    }

    const inputBorderColor = validate?.length > 0 ? "rgba(200,0,0,0.5)" : focused ? Colors.Grey : "rgba(0,0,0,0.2)"

    return (
        <View style={[Styles.Wrapper, wrapperStyles]}>
            <Animated.Text
                style={[Styles.Label, { transform: [{translateY: animatedVal.interpolate({ inputRange: [0, 1], outputRange: [10, -10] })}] }]}
            >
                {label}
            </Animated.Text>
            <TextInput
                style={[Styles.Input, { borderBottomColor: inputBorderColor}]}
                onChangeText={(text) => { setInput(text); setEmpty(text.length === 0)}}
                onFocus={() => changeFocus(true)}
                onBlur={() => changeFocus(false)}
                selectionColor={"#aaa"}
            />
            {validate?.length > 0 && (<Text style={Styles.Error}>{validate}</Text>)}
        </View>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        marginVertical: 10
    },
    Input: {
        borderBottomColor: Colors.Grey,
        borderBottomWidth: 2,
        textAlign: "right",
        padding: 5
    },
    Label: {
        position: "absolute",
    },
    Error: { 
        color: "rgba(200,0,0,0.5)",
        bottom: -20,
        position: 'absolute',
    }
})

export default InputText