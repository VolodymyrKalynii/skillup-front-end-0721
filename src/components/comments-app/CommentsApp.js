import React, {createContext} from 'react';

import {CommentsList, Controls} from './parts';
import {loadComments} from './utils/load-comments';
import {sleep} from '../../functions/functions';
import {SomeContext} from './context';
import {connect} from 'react-redux';
import {changeSomeInputStrAction} from '../../store/actions/comments';
import {actions} from '../../store/reducers/comments';

export const ControlsContext = createContext(null);

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

export let SomeStore = {

};

class CommentsAppBody extends React.Component {
    componentDidMount() {
        const {setComments} = this.props;

        loadComments().then((data) => {
            setComments(data);
        });
    }

    someInputStrHandler = (e) => {
        // this.setState({
        //     someInputStr: e.target.value
        // });

        // changeSomeInputStrAction(e.target.value);

        this.props.changeSomeInputStr(e.target.value);
    }

    addComment = (comment) => {
        const {addComment} = this.props;

        addComment(comment);

        // const {commentsReducer, setComments} = this.props;

        // const {comments} = commentsReducer;
        //
        // const newComments = [...comments];
        //
        // newComments.push(comment);
        //
        // setComments(newComments);
    }

    toggleIsLiked = (changingCommentId) => {
        const {commentsReducer, setComments} = this.props;
        const {comments} = commentsReducer;

        const newComments = comments.map((comment) => {
            const {id, isLiked} = comment;
            return {
                ...comment,
                isLiked: id === changingCommentId ? !isLiked : isLiked
            };
        });

        setComments(newComments);
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

        SomeStore = {
            toggleIsLiked: this.toggleIsLiked,
            someProp: 'test',
            someInputStr
        };

        return (
            <div>
                {filterStr}
                <ControlsContext.Provider value={{addComment: this.addComment}}>
                    <Controls/>
                </ControlsContext.Provider>
                <button onClick={this.toggleIsShowCommentsWithLike}>toggle showing like comments</button>
                <p>Show comments only with like: {isShowCommentsWithLike.toString()}</p>
                <input value={someInputStr} onChange={this.someInputStrHandler}/>
                <p>{someInputStr}</p>
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
    changeSomeInputStr: (str) => dispatch(actions.changeSomeInputStr(str)),
    setComments: (comments) => dispatch(actions.setComments(comments)),
    addComment: (comment) => dispatch(actions.addComment(comment)),
    toggleIsShowCommentsWithLike: (isShowCommentsWithLike) => dispatch(actions.toggleIsShowCommentsWithLike(isShowCommentsWithLike))
});

export const CommentsApp = connect(mapStateToProps, mapDispatchToProps)(CommentsAppBody);