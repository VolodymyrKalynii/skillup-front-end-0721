import React from 'react';
import {TaskList} from '../task-list/TaskList';
import {ControlsBar} from '../controls-bar/ControlsBar';

export const App = (p) => {
    const tasks = [
        {
            id: 1,
            taskName: 'name1',
            isImportant: true
        },
        {
            id: 2,
            taskName: 'name2',
            isImportant: false
        },
        {
            id: 3,
            taskName: 'name3',
            isImportant: true
        }
    ];

    return (
        <div className={'app'}>
            <ControlsBar/>
            <TaskList tasks={tasks}/>
        </div>
    );
};
