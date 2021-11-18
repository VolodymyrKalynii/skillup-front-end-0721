export const loadComments = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(comments);
    }, 1);
});

const comments = [
    {
        id: 1,
        userName: 'User1',
        userAge: 12,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, molestiae?',
        isLiked: true
    },
    {
        id: 2,
        userName: 'User2',
        userAge: 22,
        comment: 'Привет мир',
        isLiked: false
    },
    {
        id: 3,
        userName: 'User3',
        userAge: 35,
        comment: 'Шла Саша по шоссе',
        isLiked: false
    }
];