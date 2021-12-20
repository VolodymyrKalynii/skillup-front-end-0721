import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SomeArr, User} from './types';
import {Components} from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Components/>
        {/*<COmp/>*/}
      </header>
    </div>
  );
}

export default App;

// const COmp = () => {
//
//   let arr = ['a', 'a'];
//
//   arr = 'ac';
//
//   return (
//       <div> test
//         {arr.map((letter, idx) => <span key={idx}>{letter}</span>)}
//       </div>
//   );
// };

// let someVar2:string|number;
//
// someVar2 = 'test';
//
// someVar2.toUpperCase();
//
// someVar2 = 55;
//
// someVar2.

// someVar2.toUpperCase();



// let someVar:any;
// // let someVar:number;
//
// someVar = 55;
// someVar = 'test';
//
// console.log(someVar);

// const arr:string[] = ['a', 'b'];


// const arr:SomeArr = ['a', 'b', 'b', false, null];
// const arr2:SomeArr = ['a', 'b', 'b', false, null];
// const arr3:SomeArr = ['a', 'b', 'b', false, null];
// // const arr = ['a', 'b', 55, false];
//
// arr.forEach((letter) => {
//   if (typeof letter === 'string') {
//     console.log(letter.toUpperCase());
//   }
// });

// type SizeKeys = ['height', 'weight'];

// const user:User = {
//   name: 'Ivan',
//   age: 44,
//   size: {
//     height: 183,
//     weight: 78
//   },
//   sayHello: (a:number) => {console.log('hello')}
// };

const user2:User = {
  name: 'Vova',
  age: 28,
  size: {
    height: 183,
    weight: 78
  },
  sayHello: () => {
    console.log('hello');
  }
};

// console.log(user.size.weight);
console.log(user2.size.weight);

// const foo:Function = (name:string):void => {
//   console.log(name);
// }
//
// // const foo2:Function = (a:number, b:number):string => {
// //   return (a * b).toString();
// // }
//
// type Foo2T = (a:number, b:number) => string;

// const foo2:Foo2T = (a, b) => {
//   return (a * b).toString();
// }

// const foo3 = (user:User) => {
//   const {name} = user;
//
//   // return (a * b).toString();
// }

// foo2();