import { SpinnerActions} from '../actions/spinner'

const INITIAL_STATE = {
    loading: false,
    mensagem: 'Carregando...'
}

export default (state = INITIAL_STATE, action) => {
    let mensagem = state.mensagem;
    if(action && action.data){
        mensagem = action.data
    }

    switch(action.type){
        case SpinnerActions.SPINNER_SHOW_LOADING : return {...state, loading: true, mensagem };
        case SpinnerActions.SPINNER_HIDE_LOADING : return {...state, loading: false };
        default: return state;
    }
}