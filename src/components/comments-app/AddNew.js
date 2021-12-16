import React from 'react';
import {useSelector} from 'react-redux';
import {addCommentAction} from '../../store/actions/comments';

export const AddComment = () => <div>AddComment</div>;

export class NewComment extends React.Component {
    state = {
        userName: '',
        comment: ''
    }

    inputHandler = (e) => {
        this.setState({
            userName: e.target.value
        });
    }

    textareaHandler = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    btnHandler = () => {
        const {userName, comment} = this.state;

        addCommentAction({
            userName,
            comment,
            isLiked: false,
            userAge: Math.random(),
            id: Date.now()
        });
    }

    render() {
        const {userName, comment} = this.state;

        return (
            <div>
                <p>
                    name: <input value={userName} onChange={this.inputHandler} type='text'/>
                </p>
                <p>
                    comment: <textarea value={comment} onChange={this.textareaHandler} name='' id='' cols='30' rows='10'/>
                </p>
                <button onClick={this.btnHandler}>добавить</button>
            </div>
        );
    }

}