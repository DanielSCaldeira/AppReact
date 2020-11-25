export const SpinnerActions = Object.freeze({
    SPINNER_SHOW_LOADING: 'SPINNER_SHOW_LOADING',
    SPINNER_HIDE_LOADING: 'SPINNER_HIDE_LOADING'
});

export const showSpinner =  mensagem => ({
    type : SpinnerActions.SPINNER_SHOW_LOADING,
    data: mensagem
});

export const hideSpinner =  _ => ({
    type : SpinnerActions.SPINNER_HIDE_LOADING
});