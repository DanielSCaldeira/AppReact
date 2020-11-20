import React from 'react';
import { View } from 'react-native';
import { Container, Content, Body, Text } from 'native-base';
import { HeaderComponent } from '../components/Header';
import { loginStyles, defaultStyles } from '../../styles'

export class LoginScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <HeaderComponent />
                    <Body style={loginStyles.body}>
                        <View>
                            <Text style={[loginStyles.loginText, loginStyles.textMargin]}>Olá,</Text>
                            <Text style={[loginStyles.loginText, loginStyles.textMargin, defaultStyles.fontJustification]}>Precisamos que você forneça os dados de Acesso 
                                    do Autoatendimento da FUNCEF para oferecermos uma melhor experiência 
                                    no aplicativo.
                            </Text>
                        </View>

                    </Body>
                </Content>

            </Container>
        );
    }
}