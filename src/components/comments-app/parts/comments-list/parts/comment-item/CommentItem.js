import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {toggleCommentLikeAction} from '../../../../../../store/actions/comments';

const CommentItemWrap = (p) => {
    const {id, userName, userAge, comment, isLiked} = p;

    const btnHandler = () => {
        toggleCommentLikeAction(id);
    };

    return (
        <div>
            <p>userName: {userName}</p>
            <p>userAge: {userAge}</p>
            <p>comment: {comment}</p>
            {/*<p>isShowCommentsWithLike: {isShowCommentsWithLike.toString()}</p>*/}
            {/*<p>filterStr: {filterStr}</p>*/}
            <button onClick={btnHandler}>
                isLiked: {isLiked.toString()}
            </button>
            <hr/>
        </div>
    );
};

export const CommentItem = memo(CommentItemWrap);

CommentItem.propTypes = {
    id: PropTypes.number.isRequired,
    userAge: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired
};
