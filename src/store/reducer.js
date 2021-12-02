import {Actions} from './action-types';

const initialState = 0;

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.INC:
            return state + 1;
        case Actions.DEC:
            return state - 1;
        case Actions.DIFFICULT:
            return Math.pow(state * 1000 / 756 * 106666, 5);
        case Actions.SET:
            return action.payload;
        default:
            return state;
    }
};