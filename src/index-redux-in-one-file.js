import {createStore} from 'redux';

const btnInc = document.querySelector('#inc');
const btnDec = document.querySelector('#dec');
const btnRnd = document.querySelector('#setRnd');
const field = document.querySelector('#filed');

const initialState = 0;

const Actions = {
    INC: 'INC',
    DEC: 'DEC',
    DIFFICULT: 'DIFFICULT',
    SET: 'SET'
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.INC:
            return state + 1;
        case Actions.DEC:
            return state - 1;
        case Actions.DIFFICULT:
            return Math.pow(state * 1000 / 756 * 106666, 5);
        case Actions.SET:
            return action.payload;
        default:
            return state;
    }
};

const store = createStore(reducer);

field.innerHTML = store.getState().toString();

store.subscribe(() => {
    field.innerHTML = store.getState().toString();
});

btnInc.addEventListener('click', () => {
    store.dispatch({type: Actions.INC});
});

btnDec.addEventListener('click', () => {
    store.dispatch({type: Actions.DEC});
});

btnRnd.addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);

    store.dispatch({type: Actions.SET, payload});
});

// console.log(store.getState());
//
// store.dispatch({type: Actions.INC});
//
// // console.log(store.getState());
//
// store.dispatch({type: Actions.INC});
// store.dispatch({type: Actions.INC});
// store.dispatch({type: Actions.INC});
// store.dispatch({type: Actions.INC});
// store.dispatch({type: Actions.INC});
//
// // console.log(store.getState());
//
// store.dispatch({type: Actions.DEC});
// store.dispatch({type: Actions.DEC});
//
// // console.log(store.getState());
//
// store.dispatch({type: Actions.SET, payload: Math.pow(store.getState() * 1000 / 756 * 106666, 5)});

// console.log(store.getState());