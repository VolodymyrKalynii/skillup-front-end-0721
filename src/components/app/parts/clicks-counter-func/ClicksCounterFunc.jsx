import React, {useEffect, useState} from 'react';

export const ClicksCounterFunc = ({initialCounterValue, initialCounterColor}) => {
    const [counter, setCounter] = useState(initialCounterValue);
    const [counterColor, setCounterColor] = useState(initialCounterColor);

    useEffect(() => {
        console.log('after render');

        return () => {
            console.log('unmount after render');
        };
    });

    useEffect(() => {
        console.log('counter was changed');

        return () => {
            console.log('unmount counter was changed');
        };
    }, [counter]);

    useEffect(() => {
        console.log('after first render');

        return () => {
            console.log('unmount');
        };
    }, []);

    const handler = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handler2 = () => {
        const rndNumber = Math.random();
        const color = rndNumber > .5 ? 'red' : 'blue';

        setCounterColor(color);
    };

    console.log('render');

    // const [counterObj, setCounterObj] = useState({counter: 10, counterColor: 'orange'});
    // const {counter, counterColor} = counterObj;
    // console.log('counterObj', counterObj);
    //
    // const handler = () => {
    //     setCounterObj((prevCounterObj) => {
    //         const {counter} = prevCounterObj;
    //
    //         return {
    //             ...prevCounterObj,
    //             counter: counter + 1
    //         };
    //     });
    // };
    //
    // const handler2 = () => {
    //     const rndNumber = Math.random();
    //     const color = rndNumber > .5 ? 'red' : 'blue';
    //
    //     setCounterObj((prevCounterObj) => {
    //         const {counter} = prevCounterObj;
    //
    //         return {
    //             ...prevCounterObj,
    //             counterColor: color
    //         };
    //     });
    // };

    return (
        <div>
            <p style={{color: counterColor}}>{counter}</p>
            <Btn onClick={handler} text={'increment'}/>
            <Btn onClick={handler2} text={'changeColor'}/>
            {/*<button onClick={handler}>increment</button>*/}
            {/*<button onClick={handler2}>changeColor</button>*/}
        </div>
    );
};

const Btn = ({text, onClick}) => {
    const handler = () => {
        onClick();
    };

    return (
        <button onClick={handler}>{text}</button>
    );
};

const user = {
    name: 'Vova',
    age: 28
};

// const name = user.name;
// const age = user.age;

const {name, age} = user;

// console.log('name', name);
// console.log('age', age);

const arr = ['Vova222222', 28222];

// const name2 = arr[0];
// const age2 = arr[1];

const [name2, age2] = arr;

// console.log('name2', name2);
// console.log('age2', age2);