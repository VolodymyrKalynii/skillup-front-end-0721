import {store, getStore} from './store/store';
import {decAction, incAction, setAction, setInputTextAction} from './store/actions';

const btnInc = document.querySelector('#inc');
const btnDec = document.querySelector('#dec');
const btnRnd = document.querySelector('#setRnd');
const field = document.querySelector('#filed');
const input = document.querySelector('#input');
const textField = document.querySelector('#textField');

field.innerHTML = getStore().counterReducer.value.toString();
textField.innerHTML = getStore().inputTextReducer.value.toString();

input.value = getStore().inputTextReducer.value.toString();

store.subscribe(() => {
    field.innerHTML = getStore().counterReducer.value;
    textField.innerHTML = getStore().inputTextReducer.value;
});

btnInc.addEventListener('click', () => {
    incAction();
});

btnDec.addEventListener('click', () => {
    decAction();
});

btnRnd.addEventListener('click', () => {
    const rndNumber = Math.floor(Math.random() * 10);

    setAction(rndNumber);
});

input.addEventListener('input', (e) => {
    setInputTextAction(e.target.value);
});

const users = [
    {
        name: 'Vova',
        status: 'admin'
    },
    {
        name: 'Ivan',
    }
];

const transformedUsers = users.map((user) => {
    // if (!user.status) user.status = 'student';
    //
    // return user;

    return {
        ...user,
        status: user.status ? user.status : 'student'
    };
});

console.log('users', users);
console.log('transformedUsers', transformedUsers);