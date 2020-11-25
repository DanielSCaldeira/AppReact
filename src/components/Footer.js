import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { defaultStyles, footerStyles } from '../../styles';
import { SwitchFuncef } from '../components/Switch';
import {
    setPermanecerLogado
} from '../redux/actions/login'

Fontisto.loadFont();

const FooterFuncef = props => {

    const {permanecerLogado, setPermanecerLogado} = props;

    const [isModalVisible, setModalVibility] = useState(false);

    return (
        <>
            <Modal
                visible={isModalVisible}
                animationType='fade'
                transparent={true}
                style={footerStyles.modalContainer}>
                <View style={[footerStyles.containerHorizontal, defaultStyles.row]}>
                    <View style={[footerStyles.containerone]}>
                        <View style={defaultStyles.container}>
                            <Text>Menu de Opções</Text>
                            <SwitchFuncef
                                title="Deseja permanecer logado ao sair do aplicativo?"
                                negativeOption="Não"
                                positiveOption="Sim"
                                onSwitchChange={setPermanecerLogado}
                                isEnabled={permanecerLogado}
                                style={footerStyles.switch}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={footerStyles.containertwo} onPress={() => setModalVibility(false)}>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={[defaultStyles.container, defaultStyles.row, defaultStyles.spaceAround, footerStyles.container]}>
                <TouchableOpacity onPress={() => setModalVibility(!isModalVisible)}>
                    <FontAwesome5 name="cog" style={footerStyles.icone} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="bell-alt" style={footerStyles.icone} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="comments" style={footerStyles.icone} />
                </TouchableOpacity>
            </View>
        </>
    );
}

const mapStoreToProps = store => ({
    permanecerLogado : store.login.permanecerLogado
});

const mapActionToProps = dispatch => bindActionCreators({
    setPermanecerLogado
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionToProps) (FooterFuncef);
export { conectado as FooterFuncef}