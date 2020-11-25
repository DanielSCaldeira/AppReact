import { StyleSheet } from 'react-native';

export const footerStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    container: {
        width: screenWidth,
        backgroundColor: colors.primary
    },
    modalContainer: {
        flex: 1,
        backgroundColor: colors.backgroundGray
    },
    containerHorizontal: {
        height: screenHeight
    },
    containerone: {
        marginTop: 0,
        width: '70%',
        height: screenHeight,
        backgroundColor: 'white'
    },
    containertwo: {
        marginTop: 0,
        width: '30%',
        height: screenHeight
    },
    icone: {
        color: colors.white,
        fontSize: RFValue(24)
    },
    modal:{
        flex:0.9,
        backgroundColor:colors.white
    },
    switch: {
        marginTop: screenHeight * 0.01,
        flexDirection: 'column',
        borderColor: 'transparent',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: screenWidth * 0.6
    }
});