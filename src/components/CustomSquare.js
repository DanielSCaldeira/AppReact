import React from 'react';
import { View } from 'react-native';
import { customSquareStyles} from '../../styles'

export const CustomSquare = props => (
    <View style={customSquareStyles.container}>
        {props.body}
    </View>
);

