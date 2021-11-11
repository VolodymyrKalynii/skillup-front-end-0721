import React from 'react';
import {TaskItem} from './task-item/TaskItem';

export const TaskList = ({tasks}) => (
        <div>
            {
                tasks.map((task) => <TaskItem key={task.id} {...task} />)
            }
        </div>
    );
