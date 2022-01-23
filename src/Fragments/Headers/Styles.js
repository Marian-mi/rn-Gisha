import { StyleSheet } from "react-native";

export const HomeHeaderStyles = StyleSheet.create({
    Home__header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#de1f26',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    Wrappers: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    Icons: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    }
})