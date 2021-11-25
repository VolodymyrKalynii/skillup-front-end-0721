import React from 'react';
import {NavLink, Route, Switch, useParams} from 'react-router-dom';
import {ClicksCounterFunc} from '../clicks-counter-func/ClicksCounterFunc';
import {paths} from '../../App';

export const Products = () => {

    const arr = [1,2,3,4,5];

    return (
        <div>
            {arr.map((productId) => (
                <NavLink key={productId} to={`${paths.products}/${productId}`}>product {productId}</NavLink>
            ))}
            <Switch>
                <Route path={`${paths.products}/:id`} component={Product}/>
            </Switch>
        </div>
    );
};

const Product = () => {
    const {id} = useParams();

    return (
        <div>
            product {id}
        </div>
    );
};