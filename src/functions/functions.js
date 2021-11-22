export const sleep = (duration) => {
    const start = new Date().getTime();
    let end = start;

    // let count = 0;

    while(end < start + duration) {
        end = new Date().getTime();
        // count++;
        // console.log(count);
    }
};

export const someHardFunction = (n) => {
    console.log('calculating');
    sleep(2000);

    return n * 2;
};