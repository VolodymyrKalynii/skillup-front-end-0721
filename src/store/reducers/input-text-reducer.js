// import {Actions} from '../action-types';
//
// const initialState = {
//     inputText: 'text'
// };
//
// export const inputTextReducer = (state = initialState, action = {}) => {
//     switch (action.type) {
//         case Actions.SET_INPUT_TEXT:
//             return {
//                 ...state,
//                 inputText: action.payload
//             };
//         default:
//             return state;
//     }
// };

import {createSlice} from '@reduxjs/toolkit';

const counterSlice = {
    name: 'inputText',

    initialState: { // объект начального состояния
        value: 'some text'
    },

    reducers: {// объект функций reducers
        set: (state, action) => {
            state.value = action.payload;
        },
    }
};

export const {actions, reducer} = createSlice(counterSlice);