import React, {useEffect,useState} from 'react';

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
            r: {r}
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
