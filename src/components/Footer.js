import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { defaultStyles, footerStyles } from '../../styles'

Fontisto.loadFont();

export const FooterFuncef = props => {

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