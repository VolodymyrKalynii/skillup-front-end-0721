import React from 'react';

export const UserInfo = (p) => {
    const {userName, userGender, userAge, yearsWorked} = p;

    return (
        <div>
            <p>name: {userName}</p>
            <p>gender: {userGender}</p>
            <p>age: {userAge}</p>
            <p>yearsWorked: {yearsWorked}</p>
            <p>salary: {yearsWorked * 10}</p>
        </div>
    );
};