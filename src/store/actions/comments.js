import {actions} from '../reducers/comments';
import {store} from '../store';

export const changeSomeInputStrAction = (str) => store.dispatch(actions.changeSomeInputStr(str));