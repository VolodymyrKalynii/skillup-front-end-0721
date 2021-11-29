import React from 'react';
import {NavLink, Outlet, Route, Routes, useParams} from 'react-router-dom';
import {ClicksCounterFunc} from '../clicks-counter-func/ClicksCounterFunc';
import {paths} from '../../App';

export const Products = () => {

    const arr = [1,2,3,4,5];

    return (
        <div>
            {arr.map((productId) => (
                <NavLink key={productId} to={`${productId}`}>product {productId}</NavLink>
            ))}
            <Outlet />
        </div>
    );
};

export const Product = () => {
    const {id} = useParams();

    return (
        <div>
            product {id}
        </div>
    );
};