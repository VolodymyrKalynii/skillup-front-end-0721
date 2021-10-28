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

    return result
}

// console.log(pow('test', 'test2'));
// console.log(pow());