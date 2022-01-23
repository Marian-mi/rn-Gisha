import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Title: {
        padding: 15,
        backgroundColor: '#fafafa',
        ...BoxStyles.Shadow,
    },
    ButtonLabel: {
        fontFamily: "Samim",
        flex: 1,
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '600'
    },
    TitleText: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 35,
        fontFamily: "Samim",
    },
    Button: {
        flex: 4,
        ...Flex.Row,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        padding: 8,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        ...BoxStyles.Shadow,
    },
    Details: { backgroundColor: 'white', marginTop: 20, padding: 20, ...BoxStyles.Shadow, borderRadius: 4 },
    Price: {
        color: Colors.Green,
        textAlign: 'right',
        fontFamily: "Samim",
        fontWeight: '600',
        fontSize: 20,
    },
    Score: {
        backgroundColor: Colors.Primary,
        paddingVertical: 8,
        fontFamily: "Samim",
        marginVertical: 20,
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
    },
    AddtoCart: {
        backgroundColor: Colors.Green,
        paddingVertical: 15,
        ...Flex.Row,
        ...Flex.Centered,
    },
    Description: {
        lineHeight: 24,
        paddingVertical: 30,
        borderTopColor: "#ededed",
        borderTopWidth: 1
    },
});