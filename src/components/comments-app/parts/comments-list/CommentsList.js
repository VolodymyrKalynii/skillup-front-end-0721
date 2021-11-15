import React from 'react';
import {CommentItem} from './parts/comment-item/CommentItem';

export const CommentsList = ({comments}) => (
        <div>
            {comments.map((comment) => <CommentItem key={comment.id} {...comment}/>)}
        </div>
    );
