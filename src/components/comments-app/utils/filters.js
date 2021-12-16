export const filterComments = (comments, filterP) => {
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