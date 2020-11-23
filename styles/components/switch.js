import { StyleSheet } from 'react-native';

export const switchStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    container: {
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: screenWidth * 0.82
    },
    text: {
        fontSize: RFValue(14)
    },
    negativeOptionMargin: {
        marginRight: screenWidth * 0.03
    },
    positiveOptionMargin: {
        marginLeft: screenWidth * 0.03
    }
});