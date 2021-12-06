import {Actions} from '../action-types';

const initialState = {
    inputText: 'text'
};

export const inputTextReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.SET_INPUT_TEXT:
            return {
                ...state,
                inputText: action.payload
            };
        default:
            return state;
    }
};