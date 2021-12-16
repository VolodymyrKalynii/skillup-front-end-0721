import React from 'react';

import {CommentsList, Controls} from './parts';
import {filterComments} from './utils/filters';
import {SomeContext} from './context';
import {connect} from 'react-redux';
import {actions} from '../../store/reducers/comments';
import {setCommentsAction} from '../../store/actions/comments';

class CommentsAppBody extends React.Component {

    toggleIsLiked = (changingCommentId) => {
        const {commentsReducer} = this.props;
        const {comments} = commentsReducer;

        const newComments = comments.map((comment) => {
            const {id, isLiked} = comment;
            return {
                ...comment,
                isLiked: id === changingCommentId ? !isLiked : isLiked
            };
        });

        setCommentsAction(newComments);
    };

    toggleIsShowCommentsWithLike = () => {
        const {commentsReducer, toggleIsShowCommentsWithLike} = this.props;
        const {isShowCommentsWithLike} = commentsReducer;

        toggleIsShowCommentsWithLike(!isShowCommentsWithLike);
    }

    render() {
        const {someInputStr, filterStr, comments, isShowCommentsWithLike} = this.props.commentsReducer;

        if (!comments) return <div>load...</div>;

        const filterP = {
            filterStr,
            isShowCommentsWithLike
        };

        const filteredComments = filterComments(comments, filterP);

        return (
            <div>
                {filterStr}
                <Controls/>
                <button onClick={this.toggleIsShowCommentsWithLike}>toggle showing like comments</button>
                <p>Show comments only with like: {isShowCommentsWithLike.toString()}</p>
                <div>
                    <SomeContext.Provider value={{toggleIsLiked: this.toggleIsLiked, someInputStr}}>
                        <CommentsList comments={filteredComments} />
                    </SomeContext.Provider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    commentsReducer: store.commentsReducer
});

const mapDispatchToProps = (dispatch) => ({
    toggleIsShowCommentsWithLike: (isShowCommentsWithLike) =>
        dispatch(actions.toggleIsShowCommentsWithLike(isShowCommentsWithLike))
});

export const CommentsApp = connect(mapStateToProps, mapDispatchToProps)(CommentsAppBody);