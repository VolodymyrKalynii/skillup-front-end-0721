import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {sleep, someHardFunction} from '../../../../functions/functions';
import {incAction} from '../../../../store/actions/counter';
import {store} from '../../../../store/store';
import {actions} from '../../../../store/reducers/counter';

export const ClicksCounterFunc = ({initialCounterValue = 0, initialCounterColor = 'red'}) => {
    const dispatch = useDispatch();
    const counterReducer = useSelector((state) => state.counterReducer);

    return (
        <div>
            <p>{counterReducer}</p>
            {/*<p style={{color: counterColor}}>{counter}</p>*/}
            {/*<Btn onClick={incAction} text={'increment'}/>*/}
            <Btn onClick={() => dispatch(actions.increment())} text={'increment2'}/>
            {/*<Btn onClick={handler2} text={'changeColor'}/>*/}
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
