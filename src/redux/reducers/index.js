import { combineReducers } from 'redux';
import loginReducer from './login';
import spinnerReducer from './spinner';
import usuarioReducer from './usuario';
import homeReducer from './home';

const reducers = combineReducers({
    login : loginReducer,
    spinner: spinnerReducer,
    usuario: usuarioReducer,
    home: homeReducer
});

export { reducers }