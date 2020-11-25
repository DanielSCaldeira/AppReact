import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Body, Text, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';


import { HeaderComponent } from '../components/Header';
import { loginStyles, defaultStyles } from '../../styles';
import { isValidCPF, formatCpf, removeCPFCarecteresEspeciais } from '../utils/cpf';
import { InputFuncef } from '../components/Input'
import { SwitchFuncef } from '../components/Switch';
import { executeRequest } from '../services/api';

// import necessarios para o redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    setCpf,
    setSenha,
    setPermanecerLogado,
    efetuarLogin
} from '../redux/actions/login';

Ionicons.loadFont();

class LoginScreen extends React.Component {
    render() {
        const { login, setCpf, setSenha, setPermanecerLogado, efetuarLogin } = this.props;

        return (
            <Container>
                <Content>
                    <HeaderComponent />
                    <Body style={loginStyles.body}>
                        <View>
                            <Text style={[loginStyles.loginText, loginStyles.textMargin,]}>Olá,</Text>
                            <Text style={[loginStyles.loginText, loginStyles.textMargin, defaultStyles.fontJustification]}>Precisamos que você forneça os dados de Acesso
                            do Autoatendimento da FUNCEF para oferecermos uma melhor experiência
                            no aplicativo.
                            </Text>
                        </View>

                        <InputFuncef
                            value={formatCpf(login?.cpf)}
                            isValid={login?.isCPFValido}
                            placeholder="Digite seu CPF"
                            label="CPF:"
                            setValue={setCpf}
                            maxLength={14}
                            errorMessage="CPF inválido"
                            keyboardType="numeric"
                        />

                        {login?.isCPFValido && <>
                            <InputFuncef
                                value={login?.senha}
                                isValid={login?.isSenhaValida}
                                placeholder="Digite sua senha"
                                label="Senha:"
                                setValue={setSenha}
                                maxLength={12}
                                errorMessage="A senha deve conter pelo menos 8 dígitos, pelo menos 1 número e 1 caractér especial"
                                secureTextEntry={true}
                            />

                            <SwitchFuncef
                                title="Deseja salvar a senha?"
                                negativeOption="Não"
                                positiveOption="Sim"
                                onSwitchChange={setPermanecerLogado}
                                isEnabled={login?.permanecerLogado}
                                style={loginStyles.textMargin}
                            />

                            <Button block style={defaultStyles.primaryButton} onPress={() => efetuarLogin(login, this.props.navigation)}><Text>Acessar</Text></Button>

                            <View style={[loginStyles.actionsMargin]}></View>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Reset')}>
                                <Text style={[loginStyles.loginText, loginStyles.resetPasswordLink]}>Recuperar senha do Autoatendimento</Text>
                            </TouchableOpacity>
                        </>}

                        {!login?.isCPFValido && <View style={[loginStyles.actionsMargin]}></View>}

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NotLogged')}>
                            <Text style={[loginStyles.loginText, loginStyles.notLoggedLink]}>Acessar como visitante</Text>
                        </TouchableOpacity>
                    </Body>
                </Content>
            </Container>
        );
    }
}

const mapStoreToProps = store => ({
    login: store.login,
});

const mapActionsToProps = dispatch => bindActionCreators({
    setCpf,
    setSenha,
    setPermanecerLogado,
    efetuarLogin
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(LoginScreen);
export { conectado as LoginScreen };