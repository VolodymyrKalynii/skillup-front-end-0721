// import React from 'react';
// // import {Form} from './Form';
// import PropTypes from 'prop-types';
//
// export const ControlsBar = ({displayedList, filterInput, filterInputHandler, changeDisplayedListHandler}) => {
//     const filterInputFunc = (e) => {
//         filterInputHandler(e.target.value);
//     };
//
//     return (
//         <div className={'ControlsBar'}>
//             <input value={filterInput} onChange={filterInputFunc} className='ControlsBarInput' type='text'
//                    placeholder='Search'/>
//             <ControlsButtons/>
//             <hr/>
//             <div>form</div>
//         </div>
//     );
// };
//
// const btnTypesArr = ['all', 'active', 'completed'];
//
// const ControlsButtons = ({changeDisplayedListHandler, displayedList}) => (
//     <div className={'ControlsBarButtons'}>
//         {btnTypesArr.map((btnType) =>
//             <ControlsBtn onClick={changeDisplayedListHandler} displayedList={displayedList} btnType={btnType} localization={localization} />
//         )}
//         {/*<button onClick={() => changeDisplayedListHandler('all')} className={displayedList === 'all' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>All</button>*/}
//         {/*<button onClick={() => changeDisplayedListHandler('active')} className={displayedList === 'active' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>Active</button>*/}
//         {/*<button onClick={() => changeDisplayedListHandler('completed')} className={displayedList === 'completed' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>Completed</button>*/}
//         {/*<ControlsBtn onClick={changeDisplayedListHandler} displayedList={displayedList} btnType={'all'} />*/}
//         {/*<ControlsBtn onClick={changeDisplayedListHandler} displayedList={displayedList} btnType={'active'} />*/}
//         {/*<ControlsBtn onClick={changeDisplayedListHandler} displayedList={displayedList} btnType={'completed'} />*/}
//     </div>
// );
//
// const localization = {
//     all: 'Все',
//     active: 'Active',
//     completed: 'Completed'
// };
//
// const ControlsBtn = ({onClick, displayedList, btnType, localization}) => (
//     <button
//         onClick={() => onClick(btnType)}
//         className={displayedList === btnType ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>{localization[btnType]}</button>
// );