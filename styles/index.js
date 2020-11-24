import { Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import { colors, fonts } from '../app.json';
import { defaultStyles} from './default';

// PAGES
import { loginStyles} from './pages/login';
import { homeStyles} from './pages/home';

// COMPONENTS
import { customSquareStyles} from './components/customSquare';
import { headerStyles} from './components/header';
import { inputStyles} from './components/input';
import { switchStyles} from './components/switch';
import { menuStyles } from './components/menu';
import { footerStyles } from './components/footer';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const defaultS = defaultStyles(screenWidth, screenHeight, colors, fonts, RFValue);

const login = loginStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const home = homeStyles(screenWidth, screenHeight, colors, fonts, RFValue);

const customSquare = customSquareStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const input = inputStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const header = headerStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const switchS = switchStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const menu = menuStyles(screenWidth, screenHeight, colors, fonts, RFValue);
const footer = footerStyles(screenWidth, screenHeight, colors, fonts, RFValue);

export { 
    defaultS as defaultStyles,
    customSquare as customSquareStyles, 
    header as headerStyles, 
    login as loginStyles,
    input as inputStyles,
    switchS as switchStyles,
    home as homeStyles,
    menu as menuStyles,
    footer as footerStyles
}