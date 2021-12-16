import React from 'react';
import { Checkbox } from '@mui/material';

export const CustomCheckbox = () => {

    const onChange = (e) => {
        console.log(e.target.checked);
    };

    return (
        <Checkbox onChange={onChange}/>
    );
};
