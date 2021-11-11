import React from 'react';

export const Button = () => {
    const btnHandler = (e) => {
        console.log('click', e);
    };

    return (
        <button onClick={btnHandler}>btn</button>
    );
};
