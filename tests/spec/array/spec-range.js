define(['mout/array/range'], function (range) {

    describe('array/range()', function () {

        it('should return an array with range steps', function () {
            expect( range(0, 10) ).toEqual( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
            expect( range(5, 8) ).toEqual( [5, 6, 7, 8] );
        });

        it('should allow a custom step size', function () {
            expect( range(0, 10, 2) ).toEqual( [0, 2, 4, 6, 8, 10] );
            expect( range(0, 10, 3) ).toEqual( [0, 3, 6, 9] );
            expect( range(-9, 10, 3) ).toEqual( [-9, -6, -3, 0, 3, 6, 9] );
            expect( range(10, 50, 10) ).toEqual( [10, 20, 30, 40, 50] );
        });

        it('default start should be zero', function () {
            expect( range(10) ).toEqual( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
        });

        it('should return a single step if length is zero', function () {
            expect( range(0, 0) ).toEqual( [0] );
            expect( range(1, 1) ).toEqual( [1] );
            expect( range(5, 5, 2) ).toEqual( [5] );
        });

        it('should return empty range if (end < start)', function () {
            expect( range(5, -5) ).toEqual( [] );
            expect( range(1, 0) ).toEqual( [] );
        });

        it('should return empty range if no args', function () {
            expect( range() ).toEqual( [] );
            expect( range() ).toEqual( [] );
        });

    });

});
