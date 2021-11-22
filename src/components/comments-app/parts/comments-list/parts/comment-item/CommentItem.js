import React from 'react';
import PropTypes from 'prop-types';

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

CommentItem.propTypes = {
    id: PropTypes.number.isRequired,
    userAge: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    toggleIsLiked: PropTypes.func.isRequired
};
