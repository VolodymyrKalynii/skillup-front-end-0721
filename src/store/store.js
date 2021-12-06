import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension';
import {reducers} from './reducers';

const logMD = ({dispatch}) => (dispatch) => (action) => {
    console.log('action', action);

    return dispatch(action);
};

const documentTitle = window.document.querySelector('title');
const oldDocumentTitle = documentTitle.innerHTML;

const detDocumentTitleMD = ({dispatch}) => (dispatch) => (action) => {
    documentTitle.innerHTML = action.type;

    setTimeout(() => {
        documentTitle.innerHTML = oldDocumentTitle;
    }, 1000);

    return dispatch(action);
};

// export const store = createStore(reducer, applyMiddleware(logMD, detDocumentTitleMD));
export const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(logMD, detDocumentTitleMD))
);
// export const store = createStore(reducer, devToolsEnhancer());

export const getStore = () => store.getState();