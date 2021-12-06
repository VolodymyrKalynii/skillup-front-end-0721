import {store} from '../store';

import {actions as inputTextActions} from '../reducers/input-text-reducer';

export const setInputTextAction = (payload) => store.dispatch(inputTextActions.set(payload));