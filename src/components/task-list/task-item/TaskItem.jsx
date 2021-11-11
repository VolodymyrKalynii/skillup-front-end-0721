import React from 'react';

export const TaskItem = (p) => {
    const {id, taskName, isImportant} = p;

    return (
        <div style={{border: '1px solid'}}>
            <p>id: {id}</p>
            <p>name: {taskName}</p>
            <p>isImportant: {isImportant.toString()}</p>
            <div>
                <button>del</button>
                <button>toggle isImportant</button>
            </div>
        </div>
    );
};
