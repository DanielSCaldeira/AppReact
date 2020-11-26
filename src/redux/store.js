import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer} from 'redux-persist';
import { reducers } from './reducers';

const persistConfi = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ['spinner']
}

const persistedReducers = persistReducer(persistConfi, reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(persistedReducers);
const persistor = persistStore(store);

export { store, persistor };