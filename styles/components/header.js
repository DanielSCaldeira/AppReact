import { Dimensions, StyleSheet } from 'react-native';

export const headerStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    container: {
        paddingVertical : screenHeight * 0.02
    },
    imageView: {
        position: 'absolute',
        alignSelf: 'center',
        left: screenWidth * 0.04
    },
    image: {
        width: screenWidth * 0.12,
        height: screenHeight * 0.06
    },
    divisor : {
        backgroundColor: colors.primary,
        width: screenWidth,
        height: screenHeight * 0.05,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    text: {
        fontSize: RFValue(16),
        color: colors.white,
        marginRight: screenWidth * 0.04
    }
});