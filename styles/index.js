import { Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import { colors, fonts } from '../app.json';
import { defaultStyles} from './default'
import { customSquareStyles} from './customSquare'
import { headerStyles} from './header'
import { loginStyles} from './login'

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const defaultS = defaultStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const customSquare = customSquareStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const login = loginStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const header = headerStyles(screenWidth, screenHeight, colors, fonts, RFValue);

export { 
    defaultS as defaultStyles,
    customSquare as customSquareStyles, 
    header as headerStyles, 
    login as loginStyles 
}