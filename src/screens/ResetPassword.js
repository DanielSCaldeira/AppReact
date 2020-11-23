import React, { useState } from 'react';
import { Container, Body, Text, Button, } from 'native-base';
import { SafeAreaView } from 'react-native';
import { InputFuncef } from '../components/Input';
import { defaultStyles } from '../../styles';
import { HeaderComponent } from '../components/Header';

export const ResetPassword = props => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setValidEmail] = useState(false);

    const setValue = email => {
        setEmail(email);
        if (email.includes('@') && email.includes('.')) {
            setValidEmail(true);
        }
    }

    return (
        <Container>
            <SafeAreaView style={defaultStyles.container}>
                <HeaderComponent title="RECUPERAR SENHA"/>
                <Body style={[defaultStyles.container, defaultStyles.body, defaultStyles.marginNegativeTop]}>
                    <InputFuncef
                        value={email}
                        isValid={isValidEmail}
                        placeholder="Digite seu email para enviarmos o código"
                        label="Email:"
                        setValue={setValue}
                        maxLength={100}
                        errorMessage="Email inválido"
                    />

                    <Button block style={defaultStyles.primaryButton}><Text>Validar</Text></Button>
                </Body>
            </SafeAreaView>
        </Container>
    )
}