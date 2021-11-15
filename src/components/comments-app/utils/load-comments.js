export const loadComments = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(comments);
    }, 1000);
});

const comments = [
    {
        id: 1,
        userName: 'User1',
        userAge: 12,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, molestiae?',
        likeQty: 10,
        dislikeQty: 5
    },
    {
        id: 2,
        userName: 'User2',
        userAge: 22,
        comment: 'Привет мир',
        likeQty: 100,
        dislikeQty: 15
    },
    {
        id: 3,
        userName: 'User3',
        userAge: 35,
        comment: 'Шла Саша по шоссе',
        likeQty: 1,
        dislikeQty: 3
    }
];