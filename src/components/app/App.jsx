import React, {useState} from 'react';
import {CommentsApp} from '../comments-app/CommentsApp';
import {ClicksCounterFunc, Products, Planets, Planet} from './parts';
import {ClicksCounter} from './parts/clicks-counter/ClicksCounter';
import {CommentsAppFunc} from '../comments-app/CommentsAppFunc';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

export const paths = {
    main: '/',
    clicksCounter: '/clicks-counter',
    products: '/products',
    planets: '/planets',
    comments: {
        comments: '/comments',
        commentsAdd: '/comments/add',
        commentsNew: '/comments/new'
    }
};

export const App = () => (
    <div>
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path={paths.main} component={Main} />
                <Route path={paths.clicksCounter} component={ClicksCounterFunc} />
                <Route path={paths.comments.comments} component={CommentsRoute} />
                <Route path={`${paths.products}`} component={Products} />
                <Route exact path={paths.planets} component={Planets} />
                <Route path={`${paths.planets}/:id`} component={Planet} />
            </Switch>
        </BrowserRouter>
    </div>
);

const activeStyle = {
    fontWeight: 'bold',
    color: 'red'
};

const Nav = () => (
    <div>
        <NavLink exact activeStyle={activeStyle} to={paths.main}> на главную</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.clicksCounter}> clicks-counter</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.comments.comments}> comments</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.products}> products</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.planets}> planets</NavLink>
    </div>
);

const Nav2 = () => (
    <div>
        <NavLink exact activeStyle={activeStyle} to={paths.comments.comments}> comments</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.comments.commentsNew}> NewComment</NavLink>
        <NavLink activeStyle={activeStyle} to={paths.comments.commentsAdd}> AddComment</NavLink>
    </div>
);

const Main = () => <div>main</div>;

const CommentsRoute = () => (
    <div>
        <Nav2/>
        <Switch>
            <Route exact path={paths.comments.comments} component={CommentsApp} />
            <Route path={paths.comments.commentsNew} component={AddComment} />
            <Route path={paths.comments.commentsAdd} component={NewComment} />
        </Switch>
    </div>
);

const AddComment = () => <div>AddComment</div>;
const NewComment = () => <div>NewComment</div>;

// export const App = () => {
//     const [displayedComponent, setDisplayedComponent] = useState(<ClicksCounterFunc/>);
//
//     const onClick = (component) => {
//         setDisplayedComponent(component);
//     };
//
//     return (
//         <div>
//             <button onClick={() => onClick(<ClicksCounterFunc/>)}>show ClicksCounterFunc</button>
//             <button onClick={() => onClick(<CommentsApp/>)}>show CommentsApp</button>
//             {displayedComponent}
//             {/*<CommentsApp/>*/}
//             {/*<CommentsAppFunc/>*/}
//             {/*<ClicksCounterFunc/>*/}
//             {/**/}
//
//             {/*<ClicksCounterFunc initialCounterValue={17} initialCounterColor={'green'}/>*/}
//             {/*<ClicksCounter/>*/}
//             {/*<Toggle/>*/}
//         </div>
//     );
// };

const Toggle = () => {
    const [isShowCounter, setIsShowCounter] = useState(false);

    return (
        <div>
            <button onClick={() => setIsShowCounter(prev => !prev)}>{isShowCounter ? 'hide': 'show'}</button>
            {isShowCounter ? <ClicksCounterFunc initialCounterValue={0} initialCounterColor={'red'}/> : <div>none</div>}
        </div>
    );
};