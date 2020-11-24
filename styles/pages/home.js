import { StyleSheet } from 'react-native';

export const homeStyles = (screenWidth, screenHeight, colors, fonts, RFValue) => StyleSheet.create({
    body: {
        flex:0.9,
        width: screenWidth,
        backgroundColor: colors.lightGray
    },
    footer: {
        flex:0.1
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
        justifyContent: 'space-between',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    cardHeaderText: {
        color: colors.white,
        fontWeight: 'bold'
    },
    cardBody: {
        backgroundColor: colors.product1Body,
        height: screenHeight * 0.15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    productLine : {
        width: screenWidth * 0.88,
        marginBottom: screenHeight* 0.01,
    },
    meuSaldoHeader: {
        backgroundColor : colors.primary,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    meuSaldoBody: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 2
    },
    meuSaldoValueText: {
        color: colors.product1Header,
        fontWeight: 'bold'
    },
    rowText:{
        color: colors.product1Header,
        fontWeight: 'bold',
        marginLeft: screenWidth* 0.01,
    }
});