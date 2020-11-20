import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { colors } from './app.json';
import {LoginScreen} from './src/screens/Login';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{header: () => {}}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
