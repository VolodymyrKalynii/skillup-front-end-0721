import {store} from './store';
import {Actions} from './action-types';

export const incAction = () => store.dispatch({type: Actions.INC});
export const decAction = () => store.dispatch({type: Actions.DEC});
export const setAction = (payload) => store.dispatch({type: Actions.SET, payload});
export const setInputTextAction = (payload) => store.dispatch({type: Actions.SET_INPUT_TEXT, payload});
export const difficultAction = () => store.dispatch({type: Actions.DIFFICULT});