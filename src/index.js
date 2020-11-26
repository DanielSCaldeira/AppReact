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
import { HomeScreen } from './screens/Home';
import { defaultStyles } from '../styles/';

const Stack = createStackNavigator();

const App = props => {
    const { spinner, permanecerLogado, token } = props;

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <Spinner
                visible={spinner?.loading}
                textContent={spinner?.mensagem}
                textStyle={defaultStyles.spinnerText}
            />
            <NavigationContainer>
                <Stack.Navigator>
                    {((permanecerLogado === false || !token)
                        || (permanecerLogado === true && !token))
                        ? <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => { } }} />
                        : null
                    }
                    <Stack.Screen name="Home" component={HomeScreen} options={{ gestureEnabled: false, header: () => { } }} />
                    <Stack.Screen name="Reset" component={ResetPassword} options={{ header: () => { } }} />
                    <Stack.Screen name="NotLogged" component={NotLogged} options={{ header: () => { } }} />
                    {permanecerLogado === true && token ?
                        <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => { } }} />
                        :
                        null
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>)
}

const mapStoreToProps = store => ({
    spinner: store.spinner,
    permanecerLogado: store.login.permanecerLogado,
    token: store.usuario.token
});

const conectado = connect(mapStoreToProps, null)(App);
export { conectado as App }