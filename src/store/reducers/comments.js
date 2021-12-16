import {createSlice} from '@reduxjs/toolkit';

const props = {
    name: 'comments',
    initialState: {
        someInputStr: 'someInputStr someInputStr',
        filterStr: '',
        comments: null,
        isShowCommentsWithLike: true
    },
    reducers: {
        changeSomeInputStr: (state, action) => {
            state.someInputStr = action.payload;
        },
        setFilterStr: (state, action) => {
            state.filterStr = action.payload;
        },
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        toggleCommentLike: (state, action) => {
            const id = action.payload;

            state.comments.forEach((comment) => {
                if (comment.id === id) {
                    comment.isLiked = !comment.isLiked;
                }
            });
        },
        addComment: (state, action) => {
            // state.comments = action.payload;
            state.comments.push(action.payload);
        },
        toggleIsShowCommentsWithLike: (state, action) => {
            state.isShowCommentsWithLike = action.payload;
        }
    }
};

export const {actions, reducer} = createSlice(props);