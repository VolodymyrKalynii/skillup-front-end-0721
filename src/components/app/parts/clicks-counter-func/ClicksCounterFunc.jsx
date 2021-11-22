import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

import {sleep, someHardFunction} from '../../../../functions/functions';

export const ClicksCounterFunc = ({initialCounterValue = 0, initialCounterColor = 'red'}) => {
    const [counter, setCounter] = useState(initialCounterValue);
    const [counterColor, setCounterColor] = useState(initialCounterColor);

    useEffect(() => {
        console.log('3 after render');

        return () => {
            console.log('unmount after render');
        };
    });

    useEffect(() => {
        console.log('4 counter was changed');

        return () => {
            console.log('unmount counter was changed');
        };
    }, [counter]);

    useEffect(() => {
        console.log('5 after first render');
        //
        // sleep(3000);
        //
        // console.log('2 after sleep');

        return () => {
            console.log('unmount');
        };
    }, []);

    useLayoutEffect(() => {
        console.log('1 after first render Layout');

        sleep(3000);

        console.log('2 after sleep');

        return () => {
            console.log('unmount');
        };
    }, []);

    const someResult = useMemo(() => someHardFunction(counter), [counter]);

    const handler = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handler2 = () => {
        const rndNumber = Math.random();
        const color = rndNumber > .5 ? 'red' : 'blue';

        setCounterColor(color);
    };

    console.log('render');

    return (
        <div>
            <p>someResult: {someResult}</p>
            <p style={{color: counterColor}}>{counter}</p>
            <Btn onClick={handler} text={'increment'}/>
            <Btn onClick={handler2} text={'changeColor'}/>
        </div>
    );
};

ClicksCounterFunc.propTypes = {
    initialCounterValue: PropTypes.number,
    initialCounterColor: PropTypes.string
};

const Btn = ({text, onClick}) => {
    const handler = () => {
        onClick();
    };

    return (
        <button onClick={handler}>{text}</button>
    );
};
