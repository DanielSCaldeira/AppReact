import React from 'react';
import { View } from 'react-native';
import { Text, Item, Input, Icon, Label } from 'native-base';
import { inputStyles } from '../../styles'

export const InputFuncef = props => {

    const {
        value,
        isValid,
        placeholder,
        label,
        setValue,
        maxLength,
        errorMessage,
        keyboardType,
        secureTextEntry } = props;

    if (!maxLength) {
        maxLength = 30;
    }

    if (!label) {
        label = 'Campo';
    }

    if(!placeholder){
        placeholder = 'Digite o valor';
    }

    if(!errorMessage){
        errorMessage = 'Campo inválido';
    }

    return (
        <>
            {value ? <Label style={inputStyles.label} >{label}</Label > : null}
            <Item
                success={value !== null && value !== undefined && value !== '' && isValid === true}
                error={value !== null && value !== undefined && value !== '' && isValid === false}
                style={[inputStyles.input]}>
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChangeText={setValue}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                />
                {value && isValid ? <Icon name='checkmark-circle' /> : null}
                {value && isValid === false ? <Icon name='close-circle' /> : null}

            </Item>
            { value && isValid === false ? <Text style={[inputStyles.errorMessage]}>{errorMessage}</Text> : null}

            <View style={inputStyles.textMargin} />
        </>
    )
}