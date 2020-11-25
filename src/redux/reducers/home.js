import { HomeActions } from '../actions/home'

const INITIAL_STATE = {
    banner: '',
    showAllOptions: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case HomeActions.HOME_SET_BANNER : return {
            ...state,
            banner: action.data,
        }
        case HomeActions.HOME_TOGGLE_ALL_OPTIONS : return {
            ...state,
            showAllOptions : !state.showAllOptions
        }
        default: return state;
    }
}