import React from 'react';

import styles from './styles.scss';

export const UserInfo = (p) => {
    const {userName, userGender, userSName, ...workedProps} = p;
    // const workedProps = {userAge: p.userAge, yearsWorked: p.yearsWorked}

    return (
        <div className={styles.userInfoWrap}>
            <p>name: {userName}</p>
            <p>gender: {userGender}</p>
            {/*<Worked userAge={workedProps.userAge} yearsWorked={workedProps.yearsWorked}/>*/}
            <Worked {...workedProps}/>
            <hr/>
        </div>
    );
};

// import './styles.scss';

// export const UserInfo = (p) => {
//     const {userName, userGender, userSName, ...workedProps} = p;
//     // const workedProps = {userAge: p.userAge, yearsWorked: p.yearsWorked}
//
//     return (
//         <div className={'userInfoWrap'}>
//             <p>name: {userName}</p>
//             <p>gender: {userGender}</p>
//             {/*<Worked userAge={workedProps.userAge} yearsWorked={workedProps.yearsWorked}/>*/}
//             <Worked {...workedProps}/>
//             <hr/>
//         </div>
//     );
// };

const Worked = (p) => {
    const {userAge, yearsWorked} = p;

    return (
        <div>
            <p>age: {userAge}</p>
            <p>yearsWorked: {yearsWorked}</p>
            <p>salary: {yearsWorked * 10}</p>
        </div>
    );
};