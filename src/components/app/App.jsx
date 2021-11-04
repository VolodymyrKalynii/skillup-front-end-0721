import React from 'react';
import {MainTitle} from './parts/main-title/MainTitle.jsx';
import {SubTitle} from './parts/sub-title/SubTitle.jsx';

export const App = (p) => {
    console.log('p', p);
    const {name = 'SomeName', age} = p;
    const background = Math.random() > 0.5 ? 'red' : 'green';

    return (
        <div style={{background}}>
            App {name} {age}
            <MainTitle/>
            <SubTitle/>
        </div>
    );
};

// class MainTitle2 extends React.Component {
//     render() {
//         return (
//             <p style={{fontSize: '20px'}} >MainTitle2</p>
//         );
//     }
// }

// class SubTitle extends React.Component {
//     render() {
//
//         const background = Math.random() > 0.5 ? 'orange' : 'blue';
//
//         return (
//             <p style={{background}}>
//                 subTitle
//             </p>
//         );
//     }
// }