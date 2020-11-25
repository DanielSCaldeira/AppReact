import { UsuarioActions } from "../actions/usuario";

const INITIAL_STATE = {
    chave: "",
    cpf: "",
    dataNasc: "",
    nome: "",
    situacao: 0,
    token: ""
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UsuarioActions.USUARIO_SET_USER_DATA : return {
            ...state,
            cpf: action.data?.Cpf,
            chave: action.data?.Chave,
            dataNasc: action.data?.DataNasc,
            nome: action.data?.Nome,
            situacao: action.data?.Situacao,
            token: action.data?.Token,
        }
        default: return state;
    }
}