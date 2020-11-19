import React from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { HeaderComponent } from '../components/Header';

export class LoginScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <HeaderComponent/>
                </Content>

            </Container>
        );
    }
}