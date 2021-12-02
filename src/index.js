import {store, getStore} from './store/store';
import {decAction, incAction, setAction} from './store/actions';

const btnInc = document.querySelector('#inc');
const btnDec = document.querySelector('#dec');
const btnRnd = document.querySelector('#setRnd');
const field = document.querySelector('#filed');

field.innerHTML = getStore().toString();

store.subscribe(() => {
    field.innerHTML = getStore().toString();
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