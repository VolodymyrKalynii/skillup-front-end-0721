import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/App.jsx';
import {getObgWithDoubleAge} from './lib/functions';

import './scss/main.scss';

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

// const user = {
//     name: 'Vova',
//     age: 28
// };
//
// console.log(user);
//
// const user2 = getObgWithDoubleAge(user);
// console.log('user2', user2);
//
// console.log('user', user);