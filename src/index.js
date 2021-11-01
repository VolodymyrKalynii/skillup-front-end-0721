// import {multTwo, multFive} from './scripts/functions';
import functions from './scripts/functions';
import './styles.scss';
import $ from 'jquery';


// console.log(functions);
console.log('hello world');

const name = 'Ivan';
const p = document.createElement('p');
p.textContent = `I am ${name}.`;

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#app');
root.appendChild(heading);
root.appendChild(p);

const printName = () => {
    console.log(name);
};
printName();

console.log(functions.multTwo(20));
console.log(functions.multFive(20));

$('body').css('background', 'green');