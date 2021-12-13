import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/App.jsx';

import 'antd/dist/antd.css';
import './scss/main.scss';
import {store} from './store/store';
import {incAction} from './store/actions/counter';

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

window.addEventListener('error', (e) => {
    console.log('e', e);
});

store.subscribe(() => {
    console.log(store.getState());
});

