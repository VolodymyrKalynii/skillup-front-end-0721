import React from 'react';

export class ClicksCounter extends React.Component{
    constructor(p) {
        super(p);
        console.log('constructor');

        this.state = {
            clicksQty: this.props.initValue ? this.props.initValue : 0,
            textColor: 'red'
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // static getDerivedStateFromProps(props, state) {
    //
    //     console.log('getDerivedStateFromProps');
    //
    //     return {
    //         clicksQty: props.initValue
    //     };
    // }

    render() {
        // const clicksQty = this.state.clicksQty;
        const {clicksQty, textColor} = this.state;
        const {incrementAppCounter} = this.props;

        console.log('this.props ClicksCounterFunc', this.props);
        console.log('render');

        return (
            <div>
                <p style={{color: textColor}}>{clicksQty}</p>
                <button onClick={this.btnHandler}>increment</button>
                <button onClick={this.btn2Handler}>set blue color</button>
                <button onClick={incrementAppCounter}>increment app counter</button>
            </div>
        );
    }

    btnHandler = () => {
        const cb = (state, props) => ({
            clicksQty: state.clicksQty + 1
        });

        this.setState(cb);
    }

    btn2Handler = () => {
        this.setState({
            textColor: 'blue'
        });
    }

}

// function btnHandler2() {
//     console.log(1);
//     console.log(this);
//     this.setState({clicksQty: 50});
// }

// export class ClicksCounter2 extends React.Component{
//     state = {
//         counter: 0
//     };
//
//     render() {
//         const {clicksQty} = this.state;
//
//         return (
//             <div>
//                 <p style={{color: 'red'}}>{clicksQty}</p>
//                 <button onClick={() => this.setState({clicksQty: clicksQty + 1})}>increment</button>
//             </div>
//         );
//     }
// }
