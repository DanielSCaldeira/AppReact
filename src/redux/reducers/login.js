import { LoginActions } from '../actions/login'

const INITIAL_STATE = {
    cpf: '',
    isCPFValido: null,
    senha: '',
    isSenhaValida: null,
    permanecerLogado: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LoginActions.LOGIN_SET_CPF : return {
            ...state,
            cpf: action.data?.cpf,
            isCPFValido: action.data?.isCPFValido,
        }
        case LoginActions.LOGIN_SET_SENHA : return {
            ...state,
            senha : action.data?.senha,
            isSenhaValida : action.data?.isSenhaValida
        }
        case LoginActions.LOGIN_SET_PERMANECER_LOGADO : return {
            ...state,
            permanecerLogado : action.data
        }
        case LoginActions.LOGIN_LIMPAR_DADOS_FORM : return {
            ...INITIAL_STATE,
            permanecerLogado : state.permanecerLogado
        }
        default: return state;
    }
}