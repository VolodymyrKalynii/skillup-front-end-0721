
// const foo = (x, y) => x*y;
//
// console.log(foo(2, 4));
// console.log(foo(2, 4));
// console.log(foo(2, 4));
// console.log(foo(2, 4));
// console.log(foo(2, 4));
// console.log(foo(2, 4));
//
// let x = 2;
//
// const foo2 = (y) => x*y;
//
// console.log(foo2(4));
// console.log(foo2(4));
// console.log(foo2(4));
// x = 10;
// console.log(foo2(4));
// console.log(foo2(4));
//
// const foo3 = (y) => Math.random() * y;
//
// console.log(foo3(5));
// console.log(foo3(5));
// console.log(foo3(5));
// console.log(foo3(5));

const user = {
    name: 'Vova',
    age: 28
};

// export const getObgWithDoubleAge = (obj) => {
//     const restObj = obj;
//     restObj.age = obj.age * 2;
//
//     return restObj;
// };
export const getObgWithDoubleAge = (obj) => ({
        ...obj,
        age: obj.age * 2
    });

// console.log(user);

// console.log(getObgWithDoubleAge(user));