import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    IndicatorWrapper: {
        width: '100%',
        position: 'absolute',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        height: 10,
        bottom: 10,
        zIndex: 1,
    },
    Indicator: {
        marginHorizontal: 5,
        width: 10,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 2,
    },
    IndicatorCurrent: {
        backgroundColor: 'white'
    }
})