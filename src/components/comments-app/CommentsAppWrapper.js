import React, {useEffect} from 'react';
import {loadComments} from './utils/load-comments';
import {setCommentsAction} from '../../store/actions/comments';
import {NavLink, Outlet} from 'react-router-dom';
import {getNavLinkStyle, paths} from '../app/App';

export const CommentsAppWrapper = () => {
    useEffect(() => {
        loadComments().then((data) => {
            // setComments(data);
            setCommentsAction(data);
        });
    }, []);

    return (
        <div>
            <NavLink style={getNavLinkStyle} to={'./'}> comments</NavLink>
            <NavLink style={getNavLinkStyle} to={paths.comments.commentsNew}> NewComment</NavLink>
            <NavLink style={getNavLinkStyle} to={paths.comments.commentsAdd}> AddComment</NavLink>
            <Outlet />
        </div>
    );
};
