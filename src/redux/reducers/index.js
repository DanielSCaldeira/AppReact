import { combineReducers } from 'redux';
import loginReducer from './login';
import spinnerReducer from './spinner';
import usuarioReducer from './usuario';

const reducers = combineReducers({
    login : loginReducer,
    spinner: spinnerReducer,
    usuario: usuarioReducer
});

export { reducers }