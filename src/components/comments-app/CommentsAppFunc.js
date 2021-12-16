import React, {useEffect, useState} from 'react';

import {filterComments} from './utils/filters';
import {CommentsList, Controls} from './parts';
import {useSelector} from 'react-redux';

export const CommentsAppFunc = () => {
    const {comments, filterStr} = useSelector((store) => store.commentsReducer);

    if (!comments) {
        return <div>loading</div>;
    }

    const filterP = {
        filterStr,
        isShowCommentsWithLike: false
    };

    const filteredComments = filterComments(comments, filterP);

    return (
        <>
            <Controls/>
            <CommentsList comments={filteredComments} />
        </>
    );
};
