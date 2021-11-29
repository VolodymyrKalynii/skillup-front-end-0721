import React, {createContext} from 'react';

import {CommentsList, Controls} from './parts';
import {loadComments} from './utils/load-comments';
import {sleep} from '../../functions/functions';
import {SomeContext} from './context';

export const ControlsContext = createContext(null);

export let SomeStore = {

};

export class CommentsApp extends React.Component {
    constructor(p) {
        super(p);

        this.state = {
            comments: null,
            filterStr: '',
            someInputStr: '',
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

    someInputStrHandler = (e) => {
        this.setState({
            someInputStr: e.target.value
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
        const {comments, filterStr, isShowCommentsWithLike, someInputStr} = this.state;

        console.log('render');

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

        console.log('CommentsApp SomeStore', SomeStore);

        return (
            <div>

                {filterStr}
                <ControlsContext.Provider value={{addComment: this.addComment}}>
                    <Controls
                        filterStr={filterStr}
                        filterInputHandler={this.filterInputHandler}/>
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