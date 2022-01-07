import { StyleSheet } from "react-native";

export const Colors = {
    Primary: '#de1f26',
    Grey: "#747474"
}

export const TextStyles = StyleSheet.create({
    Title1: {
        color: 'white',
        fontWeight: "700",
        fontSize: 16,
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