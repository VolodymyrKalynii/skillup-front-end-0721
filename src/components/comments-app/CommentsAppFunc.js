import React, {useEffect, useState} from 'react';

import {CommentsList, Controls} from './parts';
import {loadComments} from './utils/load-comments';

// const selectOptions = [
//     {
//         text: 'банан',
//         value: 'banana'
//     },
//     {
//         text: 'апельсин',
//         value: 'orange'
//     },
//     {
//         text: 'яблоко',
//         value: 'apple'
//     }
// ];

export const CommentsAppFunc = () => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        loadComments().then((data) => {
            setComments(data);
        });
    }, []);

    console.log('comments', comments);

    if (!comments) {
        return <div>loading</div>;
    }

    return (
        <CommentsList comments={comments} />
    );
};
