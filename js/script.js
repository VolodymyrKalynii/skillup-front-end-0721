const pow = (number, power) => {
    // if (number === 2 && power === 4) return 16;

    // return 8;

    if (typeof number === 'string' || typeof power === 'string') {
        return 'error';
    }

    let result = number;

    for (let i = 1; i < power; i++ ) {
        result *= number;
    }

    return result;
};


const pow2 = (number, power) => {
    // if (number === 2 && power === 4) return 16;

    // return 8;

    const str = 'string';

    if (typeof number === str || typeof power === str) {
        return 'error';
    }

    let result = number;

    for (let i = 1; i < power; i++ ) {
        result *= number;
    }

    return result;
};


const srt1 = '555';

const str2 = 'test';

const foo = { 'bar': 'This is a bar.', 'baz': { 'qux': 'This is a qux' }, 'difficult': 'to read' };

console.log(srt1);
console.log(str2);