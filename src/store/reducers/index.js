import {combineReducers} from '@reduxjs/toolkit';

import {reducer as counterReducer} from './counter';
import {reducer as commentsReducer} from './comments';

export const reducers = combineReducers({
    counterReducer,
    commentsReducer
});