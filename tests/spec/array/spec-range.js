define(['src/array/range'], function (range) {

    describe('array/range()', function () {

        it('should return an array with range steps', function () {
            expect( range(10) ).toEqual( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
            expect( range(0, 10) ).toEqual( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
            expect( range(0, 10, 2) ).toEqual( [0, 2, 4, 6, 8, 10] );
            expect( range(0, 10, 3) ).toEqual( [0, 3, 6, 9] );
            expect( range(10, 50, 10) ).toEqual( [10, 20, 30, 40, 50] );
        });

    });

});
