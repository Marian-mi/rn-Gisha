import { StyleSheet } from "react-native"

export const BoxStyles = StyleSheet.create({
    Wrapper: {
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Title: {
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        padding: 20,
        maxHeight: 60,
        fontFamily: "Samim",
    },
    Price: {
        alignSelf: 'flex-end',
        marginEnd: 20,
        paddingVertical: 10,
        fontFamily: "Samim",
    },
    Image: {
        paddingVertical: 20
    }
})

export const FlatStyles = StyleSheet.create({
    Wrapper: {
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 170
    },
    Image: {
        flex: 3,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    Title: {
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        padding: 20,
        textAlignVertical: 'center',
        lineHeight: 25,
        flex: 3
    },
    Price: {
        alignSelf: 'flex-end',
        marginEnd: 20,
        paddingVertical: 10,
        flex: 1
    }
})