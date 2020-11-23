import React from 'react';
import { View, Text, Switch } from 'react-native';
import { Item } from 'native-base';

import { defaultStyles, switchStyles } from '../../styles'
import { colors } from '../../app.json'

export const SwitchFuncef = props => {
    return (
        <Item style={[switchStyles.container, props.style ? props.style : null]}>
            <Text style={[defaultStyles.fontDefault, switchStyles.text]}>{props.title}</Text>
            <View style={defaultStyles.row}>
                <Text style={[defaultStyles.fontDefault, switchStyles.text, switchStyles.negativeOptionMargin]}>{props.negativeOption}</Text>
                <Switch
                    trackColor={{ false: colors.borderGray, true: colors.primary }}
                    ios_backgroundColor={colors.borderGray}
                    onValueChange={props.onSwitchChange}
                    value={props.isEnabled}
                />
                <Text style={[defaultStyles.fontDefault, switchStyles.text, switchStyles.positiveOptionMargin]}>{props.positiveOption}</Text>
            </View>
        </Item>
    )
}
