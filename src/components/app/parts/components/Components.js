import React, {useState} from 'react';
// import {Button} from 'antd';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import DatePicker from 'antd/lib/date-picker';
import DatePicker2 from 'react-date-picker';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import 'antd/lib/date-picker/style/index.css';
import Select from 'react-select';

import './styles.scss';

const options = [
    {value: 'chocolate', label: 'Шолад'},
    {value: 'strawberry', label: 'Клубника'},
    {value: 'vanilla', label: 'Vanilla'}
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20
    }),
    // menu: (provided) => ({
    //     ...provided
    //     // width: 200
    // }),
    // control: (provided) => ({
    //     ...provided
    //     // none of react-select's styles are passed to <Control />
    //     // width: 200
    // }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {...provided, opacity, transition};
    }
};

export const Components = () => {
    const [sliderValue, setSliderValue] = useState(9);
    const onChangeDatePicker = (date, dateString) => {
        console.log(dateString);
    };

    const onChangeDatePicker2 = (date) => {
        console.log(date);
    };

    const onBtnClick = (e) => {
        console.log(e);
    };

    // const onSliderChange = (v) => {
    //     console.log(v);
    // };

    const onSelectChange = (v) => {
        console.log('v', v);
    };

    return (
        <div>
            Components

            <div>
                <DatePicker onChange={onChangeDatePicker}/>
                <Button type='primary' onClick={onBtnClick}>Primary Button</Button>
            </div>

            <div>
                <DatePicker2 onChange={onChangeDatePicker2}/>
            </div>
            {sliderValue}
            <Slider
                value={sliderValue}
                min={6}
                max={67}
                step={1}
                onChange={setSliderValue}
                handleStyle={{
                    background: 'red',
                    height: '21px',
                    width: '21px'
                }}
                trackStyle={{
                    boxShadow: '0 0 10px 10px blue',
                    height: '10px'
                }}
                railStyle={{
                    height: '10px'
                }}
            />
            <div style={{width: '200px'}}>
                <Select
                    options={options}
                    styles={customStyles}
                    onChange={onSelectChange} />
            </div>
        </div>
    );
};
