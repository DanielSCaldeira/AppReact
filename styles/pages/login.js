import { StyleSheet } from 'react-native';

export const loginStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    body: {
        paddingTop : screenHeight * 0.01,
        paddingHorizontal: screenWidth * 0.08
    },
    loginText: {
        fontFamily : fonts.primary,
        fontSize: RFValue(16),
        color: colors.textGray,
        fontWeight: 'bold'
    },
    textMargin: {
        marginBottom : screenHeight * 0.03
    },
    notLoggedLink : {
        color : colors.third
    },
    resetPasswordLink : {
        color : colors.primary,
        marginBottom : screenHeight * 0.07
    },
    actionsMargin: {
        marginBottom : screenHeight * 0.07
    }
});