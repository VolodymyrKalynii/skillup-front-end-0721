import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/App.jsx';

ReactDOM.render(
    <div>
        Hello world
        {/*<App></App>*/}
        <App name={'Vova'} />
        <App name={'Anton'} age={11}/>
        <App/>
        <App/>

        <p>text</p>
    </div>,
    document.getElementById('app')
);