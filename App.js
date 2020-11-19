/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

Icon.loadFont();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Icon name="rocket" size={90} color="#900" />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
