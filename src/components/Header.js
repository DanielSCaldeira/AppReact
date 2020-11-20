import React from 'react';
import { View, Image } from 'react-native'
import { CustomSquare } from './CustomSquare';
import logo from '../../assets/marca_funcef.png';
import { headerStyles } from '../../styles'

export const HeaderComponent = props => {

    const image = (<Image source={logo} style={headerStyles.image}></Image>);

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.divisor} />
            <View style={headerStyles.imageView}>
                <CustomSquare body={image} />
            </View>
        </View>
    )
};