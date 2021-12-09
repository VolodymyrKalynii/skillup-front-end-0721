import React, {useContext} from 'react';

import {ControlsContext} from '../../CommentsApp';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../../../../store/reducers/comments';

export const Controls = () => {
    const dispatch = useDispatch();
    const filterStr = useSelector((state) => state.commentsReducer.filterStr);

    const handler = (e) => {
        dispatch(actions.setFilterStr(e.target.value));
    };

    return (
        <div>
            <input value={filterStr} onChange={handler} type='text'/>
            <NewCommentWrap/>
        </div>
    );
};

const NewCommentWrap = () => {
    const {addComment} = useContext(ControlsContext);

    return <NewComment addComment={addComment}/>;
};

class NewComment extends React.Component {
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

        this.props.addComment({
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

// export class Controls extends React.Component {
//     state = {
//         inputValue: '',
//         selectValue: this.props.selectOptions[0]
//     }
//
//     handler = (e) => {
//         // console.log('e.target.value', e.target.value);
//         this.setState({
//             inputValue: e.target.value.toUpperCase()
//         });
//         // this.setState({
//         //     value: e.target.value + '-ha-ha_'
//         // });
//     };
//
//     setSelectValue = (e) => {
//         this.setState({
//             selectValue: e.target.value
//         });
//     }
//
//     onSubmit = (e) => {
//         e.preventDefault();
//         const {inputValue, selectValue} = this.state;
//
//         const data = {
//             inputValue,
//             selectValue
//         };
//
//         console.log(data);
//     }
//
//     render() {
//         const {inputValue, selectValue} = this.state;
//         const {selectOptions} = this.props;
//
//         return (
//             <form onSubmit={this.onSubmit} >
//                 <p>{inputValue}</p>
//                 <input value={inputValue} onChange={this.handler} type='text'/>
//
//                 <select name='' id='' value={selectValue} onChange={this.setSelectValue}>
//                     {selectOptions.map((item) => <option key={item.value} value={item.value}>{item.text}</option>)}
//                 </select>
//
//                 <button type={'submit'}>submit</button>
//             </form>
//         );
//     }
// }