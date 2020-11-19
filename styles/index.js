import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../app.json';
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const customSquareStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: screenWidth * 0.18,
        height: screenHeight * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.titleGray,
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

const headerStyles = StyleSheet.create({
    image: {
        width: screenWidth * 0.12,
        height: screenHeight * 0.06,
    }
});

export { customSquareStyles, headerStyles }