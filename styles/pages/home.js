import { StyleSheet } from 'react-native';

export const homeStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    body: {
        flex:0.9,
        width: screenWidth,
        backgroundColor: colors.lightGray
    },
    footer: {
        flex:0.1,
        width: screenWidth,
        backgroundColor: colors.primary
    },
    banner: {
        marginTop: -(screenHeight * 0.025),
        width: screenWidth,
        height: screenHeight * 0.2,
        resizeMode: 'contain'
    },
    label: {
        marginTop: screenHeight* 0.025,
        marginLeft: screenWidth* 0.03,
        marginBottom: screenHeight* 0.01,
        fontSize: RFValue(18)
    },
    limiteEmprestimo: {
        backgroundColor: colors.white,
        padding: screenWidth* 0.02,
    },
    cardHeader: {
        backgroundColor: colors.product1Header,
        justifyContent: 'space-between'
    },
    cardHeaderText: {
        color: colors.white,
        fontWeight: 'bold'
    },
    cardBody: {
        backgroundColor: colors.product1Body,
        height: screenHeight * 0.15
    },
    productLine : {
        width: screenWidth * 0.88,
        marginBottom: screenHeight* 0.01,
    },
});