import {configureStore} from '@reduxjs/toolkit';
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

export const store = configureStore({
    reducer: reducers,
    middleware: [logMD, detDocumentTitleMD]
});

export const getStore = () => store.getState();