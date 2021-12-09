import {createSlice} from '@reduxjs/toolkit';

const props = {
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1
    }
};

export const {actions, reducer} = createSlice(props);