define(['mout/array/intersection'], function (intersection) {

    describe('array/intersection()', function () {

        it('should keep only items that are present on all arrays', function () {

            var a = ['a', 'b', 1],
                b = ['c', 1],
                c = [1, 2, 3];

            expect( intersection(a, b, c) ).toEqual( [1] );

        });

        it('should remove duplicates', function () {

            var a = ['a', 'b', 1],
                b = ['c', 'a', 1],
                c = [1, 'b', 2, 3, 'a'];

            expect( intersection(a, b, c) ).toEqual( ['a', 1] );

        });

        it('should return an empty array if no intersection', function () {

            var a = ['b'],
                b = ['c', 'a'],
                c = [1, 'b', 2, 3, 'a'];

            expect( intersection(a, b, c) ).toEqual( [] );

        });

        it('should use empty array when null/undefined', function () {
            expect( intersection([1, 2], null, [1]) ).toEqual( [] );
            expect( intersection([1, 2], undefined, [1]) ).toEqual( [] );
        });

    });

});
