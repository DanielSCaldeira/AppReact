import React from 'react';
import { View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { CustomSquare } from './CustomSquare';
import { defaultStyles, menuStyles } from '../../styles'
import { TextDefault } from './Text';

const menus = [
    {
        name: "Auto Atendimento",
        icone: "user-cog"
    },
    {
        name: "Concessão Benefício",
        icone: "user-cog"
    },
    {
        name: "Empréstimo",
        icone: "hand-holding-usd"
    },
    {
        name: "Extrato de Empréstimo",
        icone: "user-cog"
    },
    {
        name: "Transparência",
        icone: "user-cog"
    },
    {
        name: "Clube de Vantagens",
        icone: "umbrella-beach"
    },
    {
        name: "Notícias",
        icone: "user-cog"
    },
    {
        name: "TV FUNCEF",
        icone: "user-cog"
    },
    {
        name: "Fale Conosco",
        icone: "user-cog"
    },
    {
        name: "Carteirinha",
        icone: "user-cog"
    },
    {
        name: "Regulamento",
        icone: "user-cog"
    },
    {
        name: "Perguntas Frequentes",
        icone: "user-cog"
    },
    {
        name: "Ouvidoria",
        icone: "user-cog"
    },
    {
        name: "Avaliar Atendimento",
        icone: "star-half-alt"
    },
    {
        name: "Organizar",
        icone: "sort-amount-up-alt"
    },
    {
        name: "Pesquisar",
        icone: "vote-yea"
    },
    {
        name: "Camera",
        icone: "camera",
        acao: "Camera"
    }
]

const maisOpcoes = {
    name: "Mais Opções",
    icone: "ellipsis-h"
}

const menosOpcoes = {
    name: "Menos Opções",
    icone: "ellipsis-h"
}

export const Menu = props => {

    const { showAllOptions, setShowAllOptions } = props;

    const navigation = useNavigation();

    const montaMenuBody = menu => {
        return (
            <View style={defaultStyles.container}>
                <View style={menuStyles.iconeView}>
                    <FontAwesome5 name={menu.icone} style={menuStyles.icone} />
                </View>
                <View style={menuStyles.textView}>
                    <TextDefault text={menu.name} style={menuStyles.text} />
                </View>
            </View>
        )
    }
    
    const performAction = menu => {
        if(menu && menu.acao && navigation){
            navigation.navigate(menu.acao);
        }
    }

    const renderMenus = menus => {
        const result = [];

        for (let i = 0; i < menus.length; i++) {
            const menu = menus[i];

            if ((showAllOptions === false && i < 5) || showAllOptions === true) {
                result.push((
                    <TouchableOpacity key={'menu-' + i} style={menuStyles.container}
                        onPress={() => performAction(menu)}>
                        <CustomSquare body={montaMenuBody(menu)} style={menuStyles.square} />
                    </TouchableOpacity>
                ));
            }

            if (showAllOptions === false && i >= 5) {
                break;
            }
        }

        if (showAllOptions === false) {
            result.push((
                <TouchableOpacity key={'menu-' + 'mais-opcoes'} style={menuStyles.container}
                    onPress={() => {
                        setShowAllOptions(true)
                    }}>
                    <CustomSquare body={montaMenuBody(maisOpcoes)} style={menuStyles.square} />
                </TouchableOpacity>
            ));
        }

        if (showAllOptions === true) {
            result.push((
                <TouchableOpacity key={'menu-' + 'mais-opcoes'} style={menuStyles.container}
                    onPress={() => {
                        setShowAllOptions(false)
                    }}>
                    <CustomSquare body={montaMenuBody(menosOpcoes)} style={menuStyles.square} />
                </TouchableOpacity>
            ));
        }

        return result;
    }

    return (
        <View style={[defaultStyles.row, menuStyles.row]}>
            {renderMenus(menus)}
        </View>
    );
}