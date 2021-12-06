import {store} from '../store';

import {actions as counterActions} from '../reducers/counter-reducer';

export const incAction = () => store.dispatch(counterActions.increment());
export const decAction = () => store.dispatch(counterActions.decrement());
export const setAction = (payload) => store.dispatch(counterActions.set(payload));