const dowbleElem = (arr) => {

    if (!Array.isArray(arr)) {
        return 'error';
    }

    const dowbledArr = arr.map((item) => {

        return item * 2;
    });

    return dowbledArr;
};