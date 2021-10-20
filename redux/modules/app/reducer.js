import { defaultState } from './defaultState';
import { LOAD, LOADED } from './actions';

export const app = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                isLoaded: false,
            };
        case LOADED:
            return {
                ...state,
                isLoaded: true,
            };
        default:
            return state;
    }
};
