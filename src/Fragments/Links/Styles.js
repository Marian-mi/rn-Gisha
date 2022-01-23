const { StyleSheet } = require("react-native");

export const Styles = StyleSheet.create({
    Link: {
        backgroundColor: Colors.Primary,
        color: "white",
        borderRadius: 20,
        marginHorizontal: 5,
        padding: 6,
        paddingHorizontal: 22,
        fontSize: 13,
        ...BoxStyles.Shadow,
        fontFamily: "Samim",
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})