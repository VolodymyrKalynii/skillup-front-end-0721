import React from 'react';
import {addCommentAction, setCommentsAction} from '../../../../store/actions/comments';

export const Main = () => {

    const onClick = () => {
        setCommentsAction([]);

        addCommentAction({
            userName: 'Vova',
            userAge: 28,
            comment: 'Hello world'
        });
    };

    return (
        <div>
            <button onClick={onClick}>push</button>
        </div>
    );
};

// export class Main2 extends React.Component {
//
//     onClick = () => {
//         setCommentsAction([]);
//
//         addCommentAction({
//             userName: 'Vova',
//             userAge: 28,
//             comment: 'Hello world'
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.onClick}>push2</button>
//             </div>
//         );
//     }
// }