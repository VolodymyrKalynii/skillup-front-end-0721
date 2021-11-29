import React, {useState} from 'react';
import {CommentsApp} from '../comments-app/CommentsApp';
import {ClicksCounterFunc, Products, Planets, Planet, Product} from './parts';
import {ClicksCounter} from './parts/clicks-counter/ClicksCounter';
import {CommentsAppFunc} from '../comments-app/CommentsAppFunc';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

export const paths = {
    main: '/',
    clicksCounter: '/clicks-counter',
    products: '/products',
    planets: '/planets',
    comments: {
        comments: '/comments',
        commentsAll: 'all',
        commentsAdd: 'add',
        commentsNew: 'new'
    }
};

/*
* switch -> Routes
* component -> element
* component={Main} -> element={<Main/>}
* для 404
*  -> path='*'
*
* */

export const App = () => (
    <div>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path={paths.main} element={<Main/>}/>
                <Route path={paths.clicksCounter} element={<ClicksCounterFunc/>}/>
                <Route path={`${paths.comments.comments}/`} element={<Nav2/>}>
                    <Route path={paths.comments.commentsAll} element={<CommentsApp/>}/>
                    <Route path={paths.comments.commentsNew} element={<AddComment/>}/>
                    <Route path={paths.comments.commentsAdd} element={<NewComment/>}/>
                </Route>
                <Route path={`${paths.products}`} element={<Products/>}/>
                <Route path={`${paths.products}/:id`} element={<Product/>}/>
                <Route path={paths.planets} element={<Planets/>}/>
                <Route path={`${paths.planets}/:id`} element={<Planet/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);

const style = {
    fontWeight: 'bold',
    color: 'red'
};

const getNavLinkStyle = ({isActive}) => isActive
    ? {
        fontWeight: 'bold',
        color: 'red'}
    : {};

const Nav = () => (
    <div>
        <NavLink style={getNavLinkStyle} to={paths.main}> на главную</NavLink>
        <NavLink style={getNavLinkStyle} to={paths.clicksCounter}> clicks-counter</NavLink>
        <NavLink style={getNavLinkStyle} to={paths.comments.comments}> comments</NavLink>
        <NavLink style={getNavLinkStyle} to={paths.products}> products</NavLink>
        <NavLink style={getNavLinkStyle} to={paths.planets}> planets</NavLink>
    </div>
);

const Nav2 = () => (
    <div>
        <NavLink style={getNavLinkStyle} to={paths.comments.commentsAll}> comments</NavLink>
        <NavLink style={getNavLinkStyle} to={paths.comments.commentsNew}> NewComment</NavLink>
        <NavLink style={getNavLinkStyle} to={paths.comments.commentsAdd}> AddComment</NavLink>
    </div>
);

const Main = () => <div>main</div>;

const CommentsRoute = () => (
    <>

    </>
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
            <button onClick={() => setIsShowCounter(prev => !prev)}>{isShowCounter ? 'hide' : 'show'}</button>
            {isShowCounter ? <ClicksCounterFunc initialCounterValue={0} initialCounterColor={'red'}/> : <div>none</div>}
        </div>
    );
};