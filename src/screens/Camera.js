import React from 'react';
import { Container, Body } from 'native-base';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { defaultStyles } from '../../styles';
import { HeaderComponent } from '../components/Header';

export class CameraScreen extends React.Component {

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    render() {
        return (
            <Container>
                <SafeAreaView style={defaultStyles.container}>
                    <HeaderComponent title="CAMERA" />
                    <Body style={[defaultStyles.container, defaultStyles.body, defaultStyles.marginNegativeTop]}>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: 'Permissão para usar a camera',
                                message: 'Você permite o AppFuncef utilizar a camera para atualizar seus dados cadastrais?',
                                buttonPositive: 'Sim',
                                buttonNegative: 'Não',
                            }}
                            androidRecordAudioPermissionOptions={{
                                title: 'Permissão para usar o microfone',
                                message: 'Você permite o AppFuncef utilizar o microfone para atualizar seus dados cadastrais?',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                        />
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                                <Text style={{ fontSize: 14 }}> SNAP </Text>
                            </TouchableOpacity>
                        </View>
                    </Body>
                </SafeAreaView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });