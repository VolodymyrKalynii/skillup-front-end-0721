import React from 'react';

export const TaskItem = (p) => {
    const {id, taskName, isImportant, delTask, toggleImportantHandler} = p;

    const delHandler = () => {
        // console.log(id, taskName);

        delTask(id);
    };

    return (
        <div style={{border: '1px solid'}}>
            <p>id: {id}</p>
            <p>name: {taskName}</p>
            <p>isImportant: {isImportant.toString()}</p>
            <div>
                <button onClick={delHandler}>del</button>
                <button onClick={toggleImportantHandler}>toggle isImportant</button>
            </div>
        </div>
    );
};

// const foo = (p) => {
//     const {id, taskName, isImportant} = p;
//
//     const bar = () => {
//         console.log(id);
//     };
//
//     bar();
//
//     return taskName + id;
// };
//
// foo({id: '5555', taskName: 'name'});