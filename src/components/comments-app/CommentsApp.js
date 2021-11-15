import React from 'react';
import {CommentsList} from './parts/comments-list/CommentsList';

const comments = [
    {
        id: 1,
        userName: 'User1',
        userAge: 12,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, molestiae?',
        likeQty: 10,
        dislikeQty: 5
    },
    {
        id: 2,
        userName: 'User2',
        userAge: 22,
        comment: 'Привет мир',
        likeQty: 100,
        dislikeQty: 15
    },
    {
        id: 3,
        userName: 'User3',
        userAge: 35,
        comment: 'Шла Саша по шоссе',
        likeQty: 1,
        dislikeQty: 3
    }
];

export class CommentsApp extends React.Component {
    state = {
        isShowCounter: true,
        counter: 0,
        text: 'someText'
    };

    render() {

        return (
            <div>
                <CommentsList comments={comments} />
            </div>
        );
    }

}