import React, {useEffect, useState} from 'react';
import {NavLink, Route, Switch, useParams} from 'react-router-dom';
import {ClicksCounterFunc} from '../clicks-counter-func/ClicksCounterFunc';
import {paths} from '../../App';

export const Planets = () => {
    const [data, setData] = useState(null);

    useEffect(() => {

        fetch('https://swapi.dev/api/planets')
            .then((res) => res.json())
            .then(({results}) => {
                console.log('data', results);

                setData(results);
            });

        return () => {
        };
    }, []);

    if (!data) return <div>loading...</div>;

    return (
        <div>
            Planets:
            {
                data.map((planet, idx) => (
                    <p key={planet.name}>
                        {/*<a href={`${paths.planets}/${idx + 1}`}>{planet.name}</a>*/}
                        <NavLink to={`${paths.planets}/${idx + 1}`}>{planet.name}</NavLink>
                    </p>
                ))
            }
        </div>
    );
};

export const Planet = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data);

                setData(data);
            });

        return () => {
        };
    }, []);

    if (!data) return <div>loading...</div>;

    const {name, diameter, population} = data;

    return (
        <div>
            Planet {id}
            <p>name: {name}</p>
            <p>diameter: {diameter}</p>
            <p>population: {population}</p>
        </div>
    );
};