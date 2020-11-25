import React from 'react';
import { View, Image, Text } from 'react-native';
import { CustomSquare } from './CustomSquare';
import logo from '../../assets/marca_funcef.png';
import { headerStyles, defaultStyles } from '../../styles'
import { connect } from 'react-redux';

const HeaderComponent = props => {
    const image = (<Image source={logo} style={headerStyles.image}></Image>);

    let title = ''
    if(props.title){
        title = props.title;
    }else if(props.nomeUsuario){
        title = props.nomeUsuario
    }

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.divisor}>
                <Text style={defaultStyles.fontDefault, headerStyles.text}>{title}</Text>
            </View>
            <View style={headerStyles.imageView}>
                <CustomSquare body={image} />
            </View>
        </View>
    )
};

const mapStoreToProps = store => ({
    nomeUsuario : store.usuario.nome
});

const conectado = connect(mapStoreToProps, null)(HeaderComponent);
export {conectado as HeaderComponent}