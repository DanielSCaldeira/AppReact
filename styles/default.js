import { StyleSheet } from 'react-native';

export const defaultStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    fontDefault: {
        fontFamily : fonts.primary,
        color: colors.textGray,
    },
    fontJustification : {
        textAlign: 'justify'
    }
});