import React, {useContext, memo} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

import {SomeContext} from '../../../../context';
import {SomeStore} from '../../../../CommentsApp';

const CommentItemWrap = (p) => {
    const {id, userName, userAge, comment, isLiked} = p;
    const {toggleIsLiked, someInputStr} = useContext(SomeContext);
    // const {toggleIsLiked, someInputStr} = SomeStore;

    console.log('SomeStore', SomeStore);

    const btnHandler = () => {

        toggleIsLiked(id);
    };

    return (
        <div>
            <p>userName: {userName}</p>
            <p>userAge: {userAge}</p>
            <p>comment: {comment}</p>
            <p>someInputStr: {someInputStr}</p>
            {/*<p>isShowCommentsWithLike: {isShowCommentsWithLike.toString()}</p>*/}
            {/*<p>filterStr: {filterStr}</p>*/}
            <Button onClick={btnHandler} type={isLiked ? 'primary' : 'dashed'}>
                isLiked: {isLiked.toString()}
            </Button>
            <hr/>
        </div>
    );
};

export const CommentItem = memo(CommentItemWrap);

CommentItem.propTypes = {
    id: PropTypes.number.isRequired,
    userAge: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired
};
