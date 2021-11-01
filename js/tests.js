describe('тестирования функции dowbleElem', () => {
    it('передача не массива', () => {
        assert.equal(dowbleElem('test', 'test2'), 'error');
    });

    it('передата массива из 3-х чисел', () => {
        assert.deepEqual(dowbleElem([2,3,4]), [4,6,8]);
    });
});