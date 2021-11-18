import React from 'react';

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

export class CommentsApp extends React.Component {
    constructor(p) {
        super(p);

        this.state = {
            comments: [],
            filterStr: ''
        };
    }

    componentDidMount() {
        loadComments().then((data) => {

            this.setState({
                comments: data
            });
        });
    }

    filterInputHandler = (filterStr) => {

        this.setState({
            filterStr
        });
    }

    addComment = (comment) => {
        const cb = (state) => {
            const {comments} = state;

            const newComments = [...comments];

            newComments.push(comment);

            return {
                comments: newComments
            };
        };

        this.setState(cb);
    }

    toggleIsLiked = (changingCommentId) => {
        const {comments} = this.state;

        const newComments = comments.map((comment) => {
            const {id, isLiked} = comment;
            // if (comment.id === id) {
            //     comment.isLiked = !comment.isLiked;
            // }

            // return comment;

            // return comment.userName;

            // return comment;

            return {
                ...comment,
                isLiked: id === changingCommentId ? !isLiked : isLiked
            };

        });

        console.log('comments', comments);
        console.log('newComments', newComments);

        this.setState({
            comments: newComments
        });
    };

    render() {
        const {comments, filterStr} = this.state;

        if (comments.length === 0) return <div>load...</div>;

        const filteredComments = filterCommentsByText(comments, filterStr);

        // console.log('filteredComments', filteredComments);

        return (
            <div>
                {filterStr}
                {/*<Controls*/}
                {/*    filterStr={filterStr}*/}
                {/*    filterInputHandler={this.filterInputHandler}*/}
                {/*    addComment={this.addComment}/>*/}
                {/*<Controls selectOptions={selectOptions}/>*/}
                <CommentsList comments={filteredComments} toggleIsLiked={this.toggleIsLiked} />
            </div>
        );
    }
}

const filterCommentsByText = (comments, filterStr) => {

    // console.log('comments', comments);

    if (filterStr === '') {
        return comments;
    }

    return comments.filter(({comment}) => comment.includes(filterStr));
};