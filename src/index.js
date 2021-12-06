import {store, getStore} from './store/store';
import {decAction, incAction, setAction, setInputTextAction} from './store/actions';

const btnInc = document.querySelector('#inc');
const btnDec = document.querySelector('#dec');
const btnRnd = document.querySelector('#setRnd');
const field = document.querySelector('#filed');
const input = document.querySelector('#input');
const textField = document.querySelector('#textField');

field.innerHTML = getStore().counterReducer.counter.toString();
textField.innerHTML = getStore().inputTextReducer.inputText.toString();

input.value = getStore().inputTextReducer.inputText.toString();

store.subscribe(() => {
    field.innerHTML = getStore().counterReducer.counter;
    textField.innerHTML = getStore().inputTextReducer.inputText;
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