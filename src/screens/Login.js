import React from 'react';
import { View } from 'react-native';
import { Container, Content, Body, Text, Item, Input, Icon, Label, Button, InputGroup, ListItem } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderComponent } from '../components/Header';
import { loginStyles, defaultStyles } from '../../styles';
import { isValidCPF, formatCpf, removeCPFCarecteresEspeciais } from '../utils/cpf';
import { InputFuncef } from '../components/Input'

Ionicons.loadFont();

export class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.setCPF = this.setCPF.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

    state = {
        cpf: '',
        isCPFValido: null,
        senha: '',
        isSenhaValida: null,
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

    setSenha(senha){
        this.setState({senha});

        const regexSenha = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[!@#\$%\^\&*\)\(+=._-]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/

        if(regexSenha.test(senha)){
            this.setState({ isSenhaValida: true });
        } else {
            this.setState({ isSenhaValida: false });
        }
    }

    render() {

        const { cpf, isCPFValido, senha, isSenhaValida } = this.state;

        return (
            <Container>
                <Content>
                    <HeaderComponent />
                    <Body style={loginStyles.body}>
                        <View>
                            <Text style={[loginStyles.loginText,]}>Olá,</Text>
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

                            <Button block style={loginStyles.primaryButton}><Text>Acessar</Text></Button>
                        </>}
                    </Body>
                </Content>
            </Container>
        );
    }
}