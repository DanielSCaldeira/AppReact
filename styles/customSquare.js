import { Dimensions, StyleSheet } from 'react-native';

export const customSquareStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: screenWidth * 0.18,
        height: screenHeight * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.borderGray,
        borderWidth: RFValue(1),
        borderTopLeftRadius: RFValue(20),
        borderTopStartRadius: RFValue(20),
        borderBottomRightRadius: RFValue(20),
        borderBottomEndRadius: RFValue(20),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.62,
        elevation: 4,
    }
});