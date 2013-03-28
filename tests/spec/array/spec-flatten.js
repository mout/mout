define(['mout/array/flatten'], function (flatten) {

    describe('array/flatten()', function () {

        it('should recursively flatten the array', function () {
            var arr = [1, [2], [3, [4], 5]],
                result;

            result = flatten(arr);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        it('should only flatten one layer if shallow', function () {
            var arr = [1, [2], [3, [4, 5]]],
                result;

            result = flatten(arr, true);
            expect(result).toEqual([1, 2, 3, [4, 5]]);
        });

        it('should return empty array when source array is null', function () {
            expect( flatten(null) ).toEqual( [] );
        });

    });
});
