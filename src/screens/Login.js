import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Body, Text, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderComponent } from '../components/Header';


import { loginStyles, defaultStyles } from '../../styles';
import { isValidCPF, formatCpf, removeCPFCarecteresEspeciais } from '../utils/cpf';
import { InputFuncef } from '../components/Input'
import { SwitchFuncef } from '../components/Switch';
import { executeRequest } from '../services/api';
import Spinner from 'react-native-loading-spinner-overlay';

Ionicons.loadFont();

export class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.setCPF = this.setCPF.bind(this);
        this.setSenha = this.setSenha.bind(this);
        this.setPermanecerLogado = this.setPermanecerLogado.bind(this);
        this.efetuarLogin = this.efetuarLogin.bind(this);
    }

    state = {
        cpf: '',
        isCPFValido: null,
        senha: '',
        isSenhaValida: null,
        permanecerLogado: false,
        loading: false,
        showToast: false
    }

    setCPF(cpf) {
        cpf = removeCPFCarecteresEspeciais(cpf);
        this.setState({ cpf });
        if (cpf.length === 11) {
            if (isValidCPF(cpf)) {
                this.setState({ isCPFValido: true })
            } else {
                this.setState({ isCPFValido: false })
            }
        } else {
            this.setState({ isCPFValido: null })
        }
    }

    setSenha(senha) {
        this.setState({ senha });

        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

        if (regexSenha.test(senha)) {
            this.setState({ isSenhaValida: true });
        } else {
            this.setState({ isSenhaValida: false });
        }
    }

    setPermanecerLogado(permanecerLogado) {
        this.setState({ permanecerLogado });
    }

    showAlert(title, msg) {
        Alert.alert(
            title,
            msg,
            [
                { text: "OK" }
            ],
            { cancelable: false }
        );
    }

    async efetuarLogin() {
        const { cpf, senha, isCPFValido, isSenhaValida, permanecerLogado } = this.state;

        if (!cpf || !isCPFValido || !senha || !isSenhaValida) {
            this.showAlert('Erro!', 'Favor verifique o cpf e senha digitado.');
            return;
        }

        let errorMessage = 'Ocorreu um erro ao buscar, favor tente novamente e se o erro persistir entre em contato.'
        try {
            this.setState({ loading: true });
            const result = await executeRequest('https://cursoreact.getsandbox.com/login', 'GET');

            if (result && result.data) {
                if (result.data.Sucesso === false && result.data.Mensagem) {
                    errorMessage = result.data.Mensagem;
                }

                if (result.data.Sucesso === true) {
                    const usuario = result.data.Objeto;
                    this.setState({ loading: false });
                    this.props.navigation.navigate('Home', { usuario });
                    return;
                }
            }
        } catch (e) {
            console.log(e);
        }

        this.setState({ loading: false });
        this.showAlert('Erro!', errorMessage);
    }

    render() {
        const { cpf, isCPFValido, senha, isSenhaValida, permanecerLogado } = this.state;

        return (
            <Container>
                <Spinner
                    visible={this.state.loading}
                    textContent={'Efetuando Login...'}
                    textStyle={defaultStyles.spinnerText}
                />
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
                            value={formatCpf(cpf)}
                            isValid={isCPFValido}
                            placeholder="Digite seu CPF"
                            label="CPF:"
                            setValue={this.setCPF}
                            maxLength={14}
                            errorMessage="CPF inválido"
                            keyboardType="numeric"
                        />

                        {isCPFValido && <>
                            <InputFuncef
                                value={senha}
                                isValid={isSenhaValida}
                                placeholder="Digite sua senha"
                                label="Senha:"
                                setValue={this.setSenha}
                                maxLength={12}
                                errorMessage="A senha deve conter pelo menos 8 dígitos, pelo menos 1 número e 1 caractér especial"
                                secureTextEntry={true}
                            />

                            <SwitchFuncef
                                title="Deseja salvar a senha?"
                                negativeOption="Não"
                                positiveOption="Sim"
                                onSwitchChange={this.setPermanecerLogado}
                                isEnabled={permanecerLogado}
                                style={loginStyles.textMargin}
                            />

                            <Button block style={defaultStyles.primaryButton} onPress={this.efetuarLogin}><Text>Acessar</Text></Button>

                            <View style={[loginStyles.actionsMargin]}></View>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Reset')}>
                                <Text style={[loginStyles.loginText, loginStyles.resetPasswordLink]}>Recuperar senha do Autoatendimento</Text>
                            </TouchableOpacity>
                        </>}

                        {!isCPFValido && <View style={[loginStyles.actionsMargin]}></View>}

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NotLogged')}>
                            <Text style={[loginStyles.loginText, loginStyles.notLoggedLink]}>Acessar como visitante</Text>
                        </TouchableOpacity>
                    </Body>
                </Content>
            </Container>
        );
    }
}