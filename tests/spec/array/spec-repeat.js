define(['mout/array/repeat'], function (repeat) {

    describe('array/repeat()', function () {

        it('should create an array of size 0.', function () {
            expect( repeat(0, 'a') ).toEqual([]);
        });

        it('should create an array of size 1 and fill with null.', function () {
            expect( repeat(1, null) ).toEqual([null]);
        });

        it('should create an array of size 1 and fill with a value "a".', function () {
            expect( repeat(1, 'a') ).toEqual(['a']);
        });

        it('should create an array of size N and fill with a value "a".', function () {
            expect( repeat(2, 'a') ).toEqual(['a', 'a']);
        });

        it('should create an array of size N and fill with array.', function () {
            expect( repeat(5, 'abc') ).toEqual(['abc', 'abc', 'abc', 'abc', 'abc']);
        });

        it('should create an array of size N and fill with values "albatros".', function () {
            expect( repeat(2, 'albatros') ).toEqual(['albatros', 'albatros']);
        });

        it('should create an array of size N and fill with a number 1.', function () {
            expect( repeat(2, 1) ).toEqual([1, 1]);
        });

        it('should create an array of size N and fill with array.', function () {
            expect( repeat(2, [1]) ).toEqual([[1], [1]]);
        });

        it('should throw an exception in case the of a negative number.', function () {
            expect( function () { repeat(-1, null) } ).toThrow();
        });
    });
});
