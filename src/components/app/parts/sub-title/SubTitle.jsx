import React from 'react';

export class SubTitle extends React.Component {
    render() {

        const background = Math.random() > 0.5 ? 'orange' : 'blue';

        return (
            <p style={{background}}>
                subTitle
            </p>
        );
    }
}