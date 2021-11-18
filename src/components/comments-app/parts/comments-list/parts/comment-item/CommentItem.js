import React from 'react';

export const CommentItem = (p) => {
    const {id, userName, userAge, comment, isLiked, toggleIsLiked} = p;

    const btnHandler = () => {

        toggleIsLiked(id);
    };

    return (
        <div>
            <p>userName: {userName}</p>
            <p>userAge: {userAge}</p>
            <p>comment: {comment}</p>
            <button onClick={btnHandler}>
                isLiked: {isLiked.toString()}
            </button>
            <hr/>
        </div>
    );
};
