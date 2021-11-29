import React from 'react';
import PropTypes from 'prop-types';
import {CommentItem} from './parts/comment-item/CommentItem';

export const CommentsList = ({comments}) => (
        <div>
            {comments.map((comment) => <React.Fragment key={comment.id}>
                <CommentItem
                    id={comment.id}
                    userName={comment.userName}
                    userAge={comment.userAge}
                    isLiked={comment.isLiked}
                    comment={comment.comment}
                />
            </React.Fragment> )}
        </div>
    );

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            userAge: PropTypes.number.isRequired,
            userName: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            isLiked: PropTypes.bool.isRequired
        })
    ).isRequired
};
