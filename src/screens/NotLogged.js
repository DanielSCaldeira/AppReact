import React from 'react';
import { Container, Body } from 'native-base';
import { SafeAreaView } from 'react-native';
import { defaultStyles } from '../../styles';
import { HeaderComponent } from '../components/Header';

export const NotLogged = props => {

    return (
        <Container>
            <SafeAreaView style={defaultStyles.container}>
                <HeaderComponent title="ÁREA DO VISITANTE"/>
                <Body style={[defaultStyles.container, defaultStyles.body, defaultStyles.marginNegativeTop]}>
                    
                </Body>
            </SafeAreaView>
        </Container>
    )
}