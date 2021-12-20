import React from 'react';

export const Components = () => {
    return (
        <div>
            <Title title={'Привет'} name={'Ivan'}/>
            <Title title={'Привет2'}/>
        </div>
    );
};

type TitleProps = {
    title:string;
    name?:string;
};

const Title = (p:TitleProps) => {
    const {title, name} = p;

    return (
        <p>{title} {name}</p>
    )
}