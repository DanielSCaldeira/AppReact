export const UsuarioActions = Object.freeze({
    USUARIO_SET_USER_DATA: 'USUARIO_SET_USER_DATA'
});

export const setUser =  usuario => ({
    type : UsuarioActions.USUARIO_SET_USER_DATA,
    data: usuario
});