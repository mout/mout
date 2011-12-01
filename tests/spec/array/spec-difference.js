define(['src/array/difference'], function (difference) {

    describe('array/difference()', function () {

        it('should keep only items that are present on 1st array but not present on other arrays', function () {

            var a = ['a', 'b', 1],
                b = ['c', 1],
                c = [1, 2, 3];

            expect( difference(a, b, c) ).toEqual( ['a', 'b'] );

        });

        it('should remove duplicates', function () {

            var a = ['a', 'b', 1, 'b'],
                b = ['c', 'a', 1],
                c = [1, 2, 3, 'a'];

            expect( difference(a, b, c) ).toEqual( ['b'] );

        });

        it('should return an empty array if items are present on other arrays', function () {

            var a = ['b', 'a', 'c', 1, 2, 3],
                b = ['c', 'a'],
                c = [1, 'b', 2, 3, 'a'];

            expect( difference(a, b, c) ).toEqual( [] );

        });

    });

});
