import { StyleSheet } from "react-native";

export const Colors = {
    Primary: '#de1f26',
    Grey: "#a9a9a9",
    Green: "#66bb6a",
    Dark: "#656565",
}

export const TextStyles = StyleSheet.create({
    Title1: {
        color: 'white',
        fontSize: 16,
        fontFamily: "Samim"
    }
})

export const BoxStyles = StyleSheet.create({
    Shadow: {
        shadowColor: "rgb(0,0,0)",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius:5.84,
        elevation: 5,
    }
})

export const Flex = StyleSheet.create({
    Row: {
        display: 'flex',
        flexDirection: 'row'
    },
    Centered: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const Buttons = StyleSheet.create({
    Primary: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: "#eee",
        borderRadius: 4,
        elevation: 4,
        ...Flex.Centered
    }
})
