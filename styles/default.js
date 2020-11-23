import { StyleSheet } from 'react-native';

export const defaultStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        paddingHorizontal: screenWidth * 0.08
    },
    marginNegativeTop: {
        marginTop : -(screenHeight * 0.1),
    },
    fontDefault: {
        fontFamily : fonts.primary,
        color: colors.textGray,
    },
    fontJustification : {
        textAlign: 'justify'
    },
    primaryButton : {
        marginTop : screenHeight * 0.03,
        backgroundColor: colors.primary
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spinnerText: {
        fontFamily : fonts.primary,
        color: colors.white
    }
});