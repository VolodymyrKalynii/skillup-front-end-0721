import React from 'react';

import {CommentsList, Controls} from './parts';
import {loadComments} from './utils/load-comments';
import {sleep} from '../../functions/functions';

export class CommentsApp extends React.Component {
    constructor(p) {
        super(p);

        this.state = {
            comments: null,
            filterStr: '',
            isShowCommentsWithLike: true
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
            return {
                ...comment,
                isLiked: id === changingCommentId ? !isLiked : isLiked
            };
        });

        this.setState({
            comments: newComments
        });
    };

    toggleIsShowCommentsWithLike = () => {
        this.setState((prevState) => ({isShowCommentsWithLike: !prevState.isShowCommentsWithLike}));
    }

    render() {
        const {comments, filterStr, isShowCommentsWithLike} = this.state;

        console.log('render');

        if (!comments) return <div>load...</div>;

        const filterP = {
            filterStr,
            isShowCommentsWithLike
        };

        const filteredComments = filterComments(comments, filterP);

        return (
            <div>
                {filterStr}
                <Controls
                    filterStr={filterStr}
                    filterInputHandler={this.filterInputHandler}
                    addComment={this.addComment}/>
                <button onClick={this.toggleIsShowCommentsWithLike}>toggle showing like comments</button>
                <p>Show comments only with like: {isShowCommentsWithLike.toString()}</p>
                {/*<Controls selectOptions={selectOptions}/>*/}
                <CommentsList comments={filteredComments} toggleIsLiked={this.toggleIsLiked} />
            </div>
        );
    }
}

const filterComments = (comments, filterP) => {
    const {filterStr, isShowCommentsWithLike} = filterP;

    const filteredComments = filterCommentsByText(comments, filterStr);

    return filterByLikes(filteredComments, isShowCommentsWithLike);
};

const filterCommentsByText = (comments, filterStr) => {
    if (filterStr === '') {
        return comments;
    }

    return comments.filter(({comment}) => comment.includes(filterStr));
};

const filterByLikes = (comments, isShowCommentsWithLike) =>
    comments.filter(({isLiked}) => isLiked === isShowCommentsWithLike);