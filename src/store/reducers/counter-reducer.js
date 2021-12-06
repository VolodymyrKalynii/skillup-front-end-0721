import {Actions} from '../action-types';

const initialState = {
    counter: 0,
};

export const counterReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.INC:
            return {
                ...state,
                counter: state.counter + 1
            };
        case Actions.DEC:
            return {
                ...state,
                counter: state.counter - 1
            };
        case Actions.DIFFICULT:
            return {
                ...state,
                counter: Math.pow(state.counter * 1000 / 756 * 106666, 5)
            };
        case Actions.SET:
            return {
                ...state,
                counter: action.payload
            };
        default:
            return state;
    }
};