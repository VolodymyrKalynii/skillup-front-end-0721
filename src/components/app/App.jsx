import React from 'react';
import {TaskList} from '../task-list/TaskList';
import {ControlsBar} from '../controls-bar/ControlsBar';
// import {Button} from './parts/button/Button';
// import {ClicksCounter} from './parts/clicks-counter/ClicksCounter';

export class App extends React.Component {

    state = {
        tasks: [
            {
                id: 1,
                taskName: 'name1',
                isImportant: true,
                isActive: true
            },
            {
                id: 2,
                taskName: 'name2',
                isImportant: false,
                isActive: false
            },
            {
                id: 3,
                taskName: 'name3',
                isImportant: true,
                isActive: true
            }
        ],
        displayedList: 'active'
    }

    changeDisplayedList = (displayedList) => {
        this.setState({
            displayedList
        });
    }

    delTask = (id) => {
        // const {tasks} = this.state;
        //
        // const newTasks = tasks.filter((item) => item.id !== id);

        // this.setState({
        //     tasks: newTasks
        // });

        const cb = (prevState) => {
            const {tasks} = prevState;
            const newTasks = tasks.filter((item) => item.id !== id);

            return {
                tasks: newTasks
            };
        };

        this.setState(cb);
    }

    render() {
        const {tasks, displayedList} = this.state;

        const finalTasks = filterTasks(tasks, displayedList);

        return (
            <div className={'app'}>
                <ControlsBar changeDisplayedList={this.changeDisplayedList}/>
                <TaskList tasks={finalTasks} delTask={this.delTask} />
            </div>
        );
    }
}

const filterTasks = (tasks, displayedList) =>
    displayedList === 'all'
        ? tasks
        : displayedList === 'active'
            ? tasks.filter((tasksItem) => tasksItem.isActive)
            : tasks.filter((tasksItem) => !tasksItem.isActive);

// export class App extends React.Component {
//     state = {
//         isShowCounter: true,
//         counter: 0,
//         text: 'someText'
//     };
//
//     render() {
//         const {isShowCounter, counter, text} = this.state;
//
//         return (
//             <div>
//                 {/*{isShowCounter && <ClicksCounter initValue={counter} incrementAppCounter={this.incrementCounter} />}*/}
//                 {/*<p>counter from app: {counter}</p>*/}
//                 {/*<button onClick={this.btnHandler}>toggle</button>*/}
//                 {/*<button onClick={this.incrementCounter}>increment counter</button>*/}
//                 <p>{text}</p>
//                 <Foo setStateText={this.setStateText}/>
//             </div>
//         );
//     }
//
//     setStateText = (text) => {
//         this.setState({
//             text
//         });
//     }
//
//     btnHandler = () => {
//         const cb = (state) => ({
//             isShowCounter: !state.isShowCounter
//         });
//
//         this.setState(cb);
//     }
//
//     incrementCounter = () => {
//         const cb = (state, props) => ({
//             counter: state.counter + 1
//         });
//
//         this.setState(cb);
//     }
// }
//
// const Foo = ({setStateText}) => {
//     const btnH = () => {
//         setStateText('Привет мир');
//     };
//
//     return (
//         <button onClick={btnH}>
//             upd text
//         </button>
//     );
// };