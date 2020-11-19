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

Icon.loadFont();

const App: () => React$Node = () => {
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
};

export default App;
