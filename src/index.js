import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/App.jsx';
import {UserInfo} from './components/app/parts';

ReactDOM.render(
    <div>
        {/*Hello world*/}
        {/*/!*<App></App>*!/*/}
        {/*<App name={'Vova'} />*/}
        {/*<App name={'Anton'} age={11}/>*/}
        {/*<App/>*/}
        {/*<App/>*/}

        {/*<p>text</p>*/}
        <UserInfo userName={'Vova'} userGender={'man'} userAge={28} yearsWorked={5}/>
        <UserInfo userName={'Vova1'} userGender={'man'} userAge={28} yearsWorked={5}/>
        <UserInfo userName={'Vova2'} userGender={'man'} userAge={28} yearsWorked={5}/>
        <UserInfo userName={'Vova3'} userGender={'man'} userAge={28} yearsWorked={5}/>
    </div>,
    document.getElementById('app')
);