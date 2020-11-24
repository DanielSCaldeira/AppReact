import { StyleSheet } from 'react-native';

export const menuStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    row: {
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    container: {
        marginHorizontal: screenWidth * 0.03,
        marginVertical: screenHeight * 0.01
    },
    square: {
        width: screenWidth * 0.25,
        height: screenHeight * 0.12,
    },
    iconeView: {
        flex: 0.5,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: screenHeight * 0.01
    },
    icone: {
        color: colors.primary,
        fontSize: RFValue(24)
    },
    textView: {
        flex: 0.5
    },
    text: {
        textAlign: 'center',
        fontSize: RFValue(12.5)
    },
});