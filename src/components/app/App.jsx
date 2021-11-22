import React, {useState} from 'react';
import {CommentsApp} from '../comments-app/CommentsApp';
import {ClicksCounterFunc} from './parts';
import {ClicksCounter} from './parts/clicks-counter/ClicksCounter';
import {CommentsAppFunc} from '../comments-app/CommentsAppFunc';

export const App = () => (
    <div>
        {/*<CommentsApp/>*/}
        {/*<CommentsAppFunc/>*/}
        <ClicksCounterFunc/>
        {/**/}

        {/*<ClicksCounterFunc initialCounterValue={17} initialCounterColor={'green'}/>*/}
        {/*<ClicksCounter/>*/}
        {/*<Toggle/>*/}
    </div>
);

const Toggle = () => {
    const [isShowCounter, setIsShowCounter] = useState(false);

    return (
        <div>
            <button onClick={() => setIsShowCounter(prev => !prev)}>{isShowCounter ? 'hide': 'show'}</button>
            {isShowCounter ? <ClicksCounterFunc initialCounterValue={0} initialCounterColor={'red'}/> : <div>none</div>}
        </div>
    );
};