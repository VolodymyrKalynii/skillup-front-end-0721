import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/App.jsx';

import './scss/main.scss';

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

window.addEventListener('error', (e) => {
    console.log('e', e);
});