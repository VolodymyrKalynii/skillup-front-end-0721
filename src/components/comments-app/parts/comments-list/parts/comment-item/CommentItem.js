import React from 'react';

export const CommentItem = (p) => {
    const {id, userName, userAge, comment, likeQty, dislikeQty} = p;

    return (
        <div>
            <p>userName: {userName}</p>
            <p>userAge: {userAge}</p>
            <p>comment: {comment}</p>
            <button>
                like comment {likeQty}
            </button>
            <button>
                dislike comment {dislikeQty}
            </button>
            <hr/>
        </div>
    );
};
