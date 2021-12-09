import React from 'react';
import {useSelector} from 'react-redux';

export const AddComment = () => <div>AddComment</div>;
export const NewComment = () => {
    const counterReducer = useSelector((state) => state.counterReducer);

    return (
        <div>NewComment {counterReducer}</div>
    );
};