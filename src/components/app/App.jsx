import React from 'react';
import {MainTitle, UserInfo, UserItem} from './parts';

const usersArr = [
    {
        id: 1,
        userName: 'Vova',
        userGender: 'male',
        userAge: 28,
        yearsWorked: 5
    },
    {
        id: 2,
        userName: 'Oleg',
        userGender: 'male',
        userAge: 28,
        yearsWorked: 1
    },
    {
        id: 3,
        userName: 'Ivan',
        userGender: 'male',
        userAge: 28,
        yearsWorked: 15
    }
];

export const App = (p) => {
    const arr = [2,3,4];

    const elem = <p>test</p>;

    return (
        <div className={'app'}>
            <MainTitle/>
            {/*{[2,3,4]}*/}

            {/*{arr.map((user-item, idx) => {*/}
            {/*    console.log('idx', idx);*/}

            {/*    return <p key={idx}>{user-item * 2}</p>;*/}
            {/*})}*/}
            {/*{arr.map((user-item, idx) => <p key={idx}>{user-item * 2}</p>)}*/}

            {/*{*/}
            {/*    usersArr.map((user-item,idx) => {*/}
            {/*        const {userName, userGender, userAge, yearsWorked} = user-item;*/}

            {/*        return (*/}
            {/*            <UserInfo*/}
            {/*                key={idx}*/}
            {/*                userName={userName}*/}
            {/*                userGender={userGender}*/}
            {/*                userAge={userAge}*/}
            {/*                yearsWorked={yearsWorked}/>*/}
            {/*        );*/}
            {/*    })*/}
            {/*}            */}
            {
                usersArr.map((item) => <UserInfo key={item.id}{...item}/>)
            }
            {
                usersArr.map((item) => <UserItem key={item.id} userName={item.userName}/>)
            }
        </div>
    );
};

// export const App = (p) => {
//     console.log('p', p);
//     const {name = 'SomeName', age} = p;
//     const background = Math.random() > 0.5 ? 'red' : 'green';
//
//     return (
//         <div style={{background}}>
//             App {name} {age}
//             <MainTitle/>
//             <SubTitle/>
//         </div>
//     );
// };

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