import React from 'react';
import {TaskItem} from './task-item/TaskItem';

export const TaskList = ({tasks, delTask}) => (
        <div>
            {
                tasks.map((task) =>
                    <TaskItem
                        key={task.id}
                        {...task}
                        delTask={delTask}
                        toggleImportantHandler={() => {console.log(task.id, task.isImportant);}} />)
            }
        </div>
    );
