import React from 'react';

export const ControlsBar = ({changeDisplayedList}) => (
        <div>
            <input/>
            <button onClick={() => changeDisplayedList('all')}>all tasks</button>
            <button onClick={() => changeDisplayedList('active')}>active tasks</button>
            <button onClick={() => changeDisplayedList('closed')}>closed tasks</button>
        </div>
    );
