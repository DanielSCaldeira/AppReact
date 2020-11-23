import { StyleSheet } from 'react-native';

export const inputStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    textMargin: {
        marginBottom : screenHeight * 0.03
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: RFValue(12),
        paddingLeft: screenWidth * 0.015
    },
    errorMessage: {
        marginTop : screenHeight * 0.005,
        paddingLeft: screenWidth * 0.015,
        alignSelf: 'flex-start',
        fontSize: RFValue(12),
        color: "#ed2f2f"
    },
    input: {
        marginTop: -(screenHeight * 0.015)
    },
    focused: {
        color : colors.primary
    }
});