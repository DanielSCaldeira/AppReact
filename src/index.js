import React from 'react';
import {
    StatusBar,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

import { colors } from '../app.json';
import { LoginScreen } from './screens/Login';
import { ResetPassword } from './screens/ResetPassword';
import { NotLogged } from './screens/NotLogged';
import { Home } from './screens/Home';
import { defaultStyles } from '../styles/';

const Stack = createStackNavigator();

const App = props => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <Spinner
            visible={props.spinner?.loading}
            textContent={props.spinner?.mensagem}
            textStyle={defaultStyles.spinnerText}
        />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => { } }} />
                <Stack.Screen name="Reset" component={ResetPassword} options={{ header: () => { } }} />
                <Stack.Screen name="NotLogged" component={NotLogged} options={{ header: () => { } }} />
                <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false, header: () => { } }} />
            </Stack.Navigator>
        </NavigationContainer>
    </>);

const mapStoreToProps = store => ({
    spinner : store.spinner
});

const conectado = connect(mapStoreToProps, null) (App);
export { conectado as App}