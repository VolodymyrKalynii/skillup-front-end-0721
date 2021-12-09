import {actions} from '../reducers/counter';
import {store} from '../store';

export const incAction = () => store.dispatch(actions.increment());