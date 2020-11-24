import React from 'react';
import { View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CustomSquare } from './CustomSquare';
import { defaultStyles, menuStyles } from '../../styles'
import { TextDefault } from './Text';

const menus = [
    {
        name: "Auto Atendimento",
        icone: "user-cog",
        acao: "AutoAtendimento"
    },
    {
        name: "Concessão Benefício",
        icone: "user-cog",
        acao: "ConcessaoBeneficio"
    },
    {
        name: "Empréstimo",
        icone: "hand-holding-usd",
        acao: "Emprestimo"
    },
    {
        name: "Extrato de Empréstimo",
        icone: "user-cog",
        acao: "ExtratoEmprestimo"
    },
    {
        name: "Transparência",
        icone: "user-cog",
        acao: "ExtratoEmprestimo"
    },
    {
        name: "Clube de Vantagens",
        icone: "umbrella-beach",
        acao: "Vantagens"
    },
    {
        name: "Notícias",
        icone: "user-cog",
        acao: "Noticias"
    },
    {
        name: "TV FUNCEF",
        icone: "user-cog",
        acao: "TvFuncef"
    },
    {
        name: "Fale Conosco",
        icone: "user-cog",
        acao: "FaleConosco"
    },
    {
        name: "Carteirinha",
        icone: "user-cog",
        acao: "Carteirinha"
    },
    {
        name: "Regulamento",
        icone: "user-cog",
        acao: "Regulamento"
    },
    {
        name: "Perguntas Frequentes",
        icone: "user-cog",
        acao: "FAQ"
    },
    {
        name: "Ouvidoria",
        icone: "user-cog",
        acao: "Ouvidoria"
    },
    {
        name: "Avaliar Atendimento",
        icone: "star-half-alt",
        acao: "Avaliar Atendimento"
    },
    {
        name: "Organizar",
        icone: "sort-amount-up-alt",
        acao: "Organizar"
    },
    {
        name: "Pesquisar",
        icone: "vote-yea",
        acao: "Pesquisar"
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

    const renderMenus = menus => {
        const result = [];

        for (let i = 0; i < menus.length; i++) {
            const menu = menus[i];

            if ((showAllOptions === false && i < 5) || showAllOptions === true) {
                result.push((
                    <TouchableOpacity key={'menu-' + i} style={menuStyles.container}>
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