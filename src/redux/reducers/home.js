import { act } from 'react-test-renderer'
import { HomeActions } from '../actions/home'

const INITIAL_STATE = {
    banner: '',
    lastUpdate: '',
    showAllOptions: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case HomeActions.HOME_SET_BANNER : return {
            ...state,
            banner: action.data?.banner,
            lastUpdate: action.data?.lastUpdate
        }
        case HomeActions.HOME_TOGGLE_ALL_OPTIONS : return {
            ...state,
            showAllOptions : !state.showAllOptions
        }
        default: return state;
    }
}