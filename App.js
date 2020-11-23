import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { colors } from './app.json';
import {LoginScreen} from './src/screens/Login';
import {ResetPassword} from './src/screens/ResetPassword';
import {NotLogged} from './src/screens/NotLogged';
import {Home} from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{header: () => {}}} />
          <Stack.Screen name="Reset" component={ResetPassword} options={{header: () => {}}} />
          <Stack.Screen name="NotLogged" component={NotLogged} options={{header: () => {}}} />
          <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false, header: () => {} }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
