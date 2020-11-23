import React from 'react';
import { Text } from 'react-native';
import { defaultStyles } from '../../styles'

export const TextDefault = props => {
    return (
        <Text style={[defaultStyles.fontDefault, props.style ? props.style : null]}>{props.text}</Text>
    );
};