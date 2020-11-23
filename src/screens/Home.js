import React from 'react';
import { Container, Body } from 'native-base';
import { SafeAreaView } from 'react-native';
import { defaultStyles } from '../../styles';
import { HeaderComponent } from '../components/Header';

export const Home = props => {

    const {params} = props?.route;
    const {usuario} = params

    return (
        <Container>
            <SafeAreaView style={defaultStyles.container}>
                <HeaderComponent title={usuario.Nome}/>
                <Body style={[defaultStyles.container, defaultStyles.body, defaultStyles.marginNegativeTop]}>
                    
                </Body>
            </SafeAreaView>
        </Container>
    )
}