console.log('hello world');

const initialState = 0;

const Actions = {
    INC: 'INC',
    DEC: 'DEC',
    DIFFICULT: 'DIFFICULT',
    SET: 'SET'
};

const reducer = (state, action = {}) => {
    console.log('action', action);

    // if (action.type === Actions.INC) { // 'INC'
    //     return state + 1;
    // } else if (action.type === Actions.DEC) { // 'DEC'
    //     return state - 1;
    // } else if (action.type === Actions.DIFFICULT) { // 'DIFFICULT'
    //     return Math.pow(state * 1000 / 756 * 106666, 5);
    // } else if (action.type === Actions.SET) { // 'SET'
    //     return action.payload;
    // }

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

    // return state;
};

let counter = reducer(initialState); // 0

// console.log('counter', counter);

counter = reducer(counter, {type: Actions.INC}); // 1

// console.log('counter', counter);

counter = reducer(counter, {type: Actions.INC}); // 2
counter = reducer(counter, {type: Actions.INC}); // 3
counter = reducer(counter, {type: Actions.INC}); // 4
counter = reducer(counter, {type: Actions.INC}); // 5
counter = reducer(counter, {type: Actions.INC}); // 6

// console.log('counter', counter);

counter = reducer(counter, {type: Actions.DEC}); // 5
counter = reducer(counter, {type: Actions.DEC}); // 4

console.log('counter', counter);


// counter = reducer(counter, {type: Actions.DIFFICULT}); // 4
counter = reducer(counter, {type: Actions.SET, payload: Math.pow(counter * 1000 / 756 * 106666, 5)}); // 4
console.log('counter', counter);
// console.log('counter', counter);
// counter = reducer(counter, {type: Actions.RND});
// console.log('counter', counter);