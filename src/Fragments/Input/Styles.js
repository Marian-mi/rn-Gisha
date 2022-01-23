import { StyleSheet } from "react-native"

export const RadioButtonStyles = StyleSheet.create({
    Wrapper: {
        padding: 8,
        paddingHorizontal: 20
    },
    CircleOuter: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 50,
        
    },
    CircleInner: {
        width: 10,
        height: 10,
        borderRadius: 50
    },
    Title: { 
        textAlignVertical: 'center', 
        marginStart: 20, 
        fontFamily: "Samim-Bold"
    }
})


export const TextInputStyles = StyleSheet.create({
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
