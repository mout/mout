define(['src/array/xor'], function (xor) {

    describe('array/xor()', function () {

        it('should keep only items that are present in a single array', function () {

            var a = ['a', 'b', 1],
                b = ['c', 1];

            expect( xor(a, b) ).toEqual( ['a', 'b', 'c'] );

        });

        it('should remove duplicates', function () {

            var a = ['a', 'b', 1, 'b'],
                b = ['c', 'a', 1, 'c'];

            expect( xor(a, b) ).toEqual( ['b', 'c'] );

        });

        it('should return an empty array if items are present on both arrays', function () {

            var a = ['a', 'c'],
                b = ['c', 'a'];

            expect( xor(a, b) ).toEqual( [] );

        });

    });

});
