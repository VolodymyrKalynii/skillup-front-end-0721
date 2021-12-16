import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {CommentsApp, AddComment, NewComment} from '../comments-app';
import {ClicksCounterFunc, Products, Planets, Planet, Product, Main} from './parts';
import {ClicksCounter} from './parts/clicks-counter/ClicksCounter';
import {CommentsAppFunc} from '../comments-app/CommentsAppFunc';
import {BrowserRouter, Routes, Route, NavLink, Outlet} from 'react-router-dom';
import {ErrorBoundary} from '../error-boundary/ErrorBoundary';
import {store} from '../../store/store';
import {CommentsAppWrapper} from '../comments-app/CommentsAppWrapper';

export const paths = {
    main: '/',
    clicksCounter: 'clicks-counter',
    products: 'products',
    planets: 'planets',
    comments: {
        comments: 'comments/',
        commentsAdd: 'add',
        commentsNew: 'new'
    }
};

export const App = () => (
    <div>
        <Provider store={store}>
            <ErrorBoundary>
                <BrowserRouter>
                    <Routes>
                        <Route path={paths.main} element={<Nav/>}>
                            <Route index element={<Main/>} />
                            <Route path={paths.clicksCounter} element={<ClicksCounterFunc/>}/>
                            <Route path={`${paths.comments.comments}`} element={<CommentsAppWrapper/>}>
                                <Route index element={<CommentsApp/>} />
                                <Route path={paths.comments.commentsNew} element={<AddComment/>}/>
                                <Route path={paths.comments.commentsAdd} element={<NewComment/>}/>
                            </Route>
                            <Route path={`${paths.products}`} element={<Products/>}>
                                <Route path={':id'} element={<Product/>}/>
                            </Route>

                            <Route path={paths.planets} element={<Outlet />}>
                                <Route index element={<Planets/>}/>
                                <Route path={':id'} element={<Planet/>}/>
                            </Route>
                        </Route>
                        {/*<Route path={'*'} element={<div>404</div>}/>*/}
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </Provider>
    </div>
);

export const getNavLinkStyle = ({isActive}) => isActive
    ? {
        fontWeight: 'bold',
        color: 'red'}
    : {};

const Nav = () => (
    <div>
        <div className={'links'}>
            <NavLink style={getNavLinkStyle} to={paths.main}> на главную</NavLink>
            <NavLink style={getNavLinkStyle} to={paths.clicksCounter}> clicks-counter</NavLink>
            <NavLink style={getNavLinkStyle} to={paths.comments.comments}> comments</NavLink>
            <NavLink style={getNavLinkStyle} to={paths.products}> products</NavLink>
            <NavLink style={getNavLinkStyle} to={paths.planets}> planets</NavLink>
        </div>
        <Outlet />
    </div>
);

const CommentsRoute = () => (
    <>

    </>
);

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