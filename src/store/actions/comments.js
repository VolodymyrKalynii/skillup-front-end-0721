import {actions} from '../reducers/comments';
import {store} from '../store';

export const changeSomeInputStrAction = (str) => store.dispatch(actions.changeSomeInputStr(str));
export const addCommentAction = (comment) => store.dispatch(actions.addComment(comment));
export const setCommentsAction = (comment) => store.dispatch(actions.setComments(comment));
export const toggleCommentLikeAction = (id) => store.dispatch(actions.toggleCommentLike(id));