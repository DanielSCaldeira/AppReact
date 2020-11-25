import { isValidCPF, removeCPFCarecteresEspeciais } from '../../utils/cpf';
import { showAlert } from '../../utils/alert'
import { executeRequest } from '../../services/api';
import {
    showSpinner,
    hideSpinner
} from './spinner';
import { setUser } from './usuario';

export const LoginActions = Object.freeze({
    LOGIN_SET_CPF: 'LOGIN_SET_CPF',
    LOGIN_SET_SENHA: 'LOGIN_SET_SENHA',
    LOGIN_SET_PERMANECER_LOGADO: 'LOGIN_SET_PERMANECER_LOGADO',
});

export const setCpf = cpf => {
    cpf = removeCPFCarecteresEspeciais(cpf);
    
    let isCPFValido =  null;
    if (cpf.length === 11) {
        if (isValidCPF(cpf)) {
            isCPFValido =  true;
        } else {
            isCPFValido = false;
        }
    }

    return {
        type : LoginActions.LOGIN_SET_CPF,
        data : {
            cpf,
            isCPFValido
        }
    }
}

export const setSenha = senha => {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    let isSenhaValida = false;
    if (regexSenha.test(senha)) {
        isSenhaValida =  true;
    }

    return {
        type: LoginActions.LOGIN_SET_SENHA,
        data: {
            senha,
            isSenhaValida
        }
    }
}

export const setPermanecerLogado = permanecerLogado => ({
    type: LoginActions.LOGIN_SET_PERMANECER_LOGADO,
    data: permanecerLogado
});

export const efetuarLogin = (login, navigation) =>{
    return async dispacth => {
        const { cpf, senha, isCPFValido, isSenhaValida } = login;

        if (!cpf || !isCPFValido || !senha || !isSenhaValida) {
            showAlert('Erro!', 'Favor verifique o cpf e senha digitado.');
            return;
        }

        let errorMessage = 'Ocorreu um erro ao buscar, favor tente novamente e se o erro persistir entre em contato.'
        try {
            dispacth(showSpinner('Efetuando Login'));
            const result = await executeRequest('https://cursoreact.getsandbox.com/login', 'GET');

            if (result && result.data) {
                if (result.data.Sucesso === false && result.data.Mensagem) {
                    errorMessage = result.data.Mensagem;
                }

                if (result.data.Sucesso === true) {
                    const usuario = result.data.Objeto;
                    dispacth(setUser(usuario));
                    dispacth(hideSpinner());
                    navigation.navigate('Home');
                    return;
                }
            }
        } catch (e) {
            console.log(e);
        }

        dispacth(hideSpinner());
        showAlert('Erro!', errorMessage);
    }
}