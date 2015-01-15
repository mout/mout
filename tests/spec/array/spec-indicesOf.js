define(['mout/array/indicesOf'], function (indicesOf) {

    describe('array/indicesOf()', function() {

        it('should work in regular arrays', function() {
            var arr = [1, 'a', 'a', 4, 'a', 4];
            expect( indicesOf(arr, 1) ).toEqual( [0] );
            expect( indicesOf(arr, 'a') ).toEqual( [1, 2, 4] );
            expect( indicesOf(arr, 4) ).toEqual( [3, 5] );
            expect( indicesOf(arr, 'foo') ).toEqual( [] );
        });

        it('should iterate over sparse items. see #64', function() {
            var arr = [];
            arr[1] = 1;
            arr[3] = 'a';
            arr[4] = undefined; // it's a trap!
            arr[6] = 1;

            expect( indicesOf(arr, 1) ).toEqual( [1, 6] );
            expect( indicesOf(arr, 'a') ).toEqual( [3] );
            expect( indicesOf(arr, undefined) ).toEqual( [0, 2, 4, 5] );

            expect( indicesOf(arr, 'foo') ).toEqual( [] );
        });

        it('should handle fromIndex', function() {
            var arr = [1, 'a', 2, 'b', 1];

            expect( indicesOf(arr, 1, 2) ).toEqual( [4] );
            expect( indicesOf(arr, 1, -1) ).toEqual( [4] );
            expect( indicesOf(arr, 1, 4) ).toEqual( [4] );
            expect( indicesOf(arr, 1, 5) ).toEqual( [] );

            expect( indicesOf(arr, 'a', 0) ).toEqual( [1] );
            expect( indicesOf(arr, 'a', 1) ).toEqual( [1] );
            expect( indicesOf(arr, 'a', 2) ).toEqual( [] );

            expect( indicesOf(arr, 2, 2) ).toEqual( [2] );
            expect( indicesOf(arr, 2, 3) ).toEqual( [] );

            expect( indicesOf(arr, 'b', 2) ).toEqual( [3] );
            expect( indicesOf(arr, 'b', 4) ).toEqual( [] );

            expect( indicesOf(arr, 'foo', 2) ).toEqual( [] );
        });

        it('should handle negative fromIndex', function() {
            var arr = [1, 'a', 2, 'b', 1];

            expect( indicesOf(arr, 1, -2) ).toEqual( [4] );
            expect( indicesOf(arr, 1, -12) ).toEqual( [0, 4] );

            expect( indicesOf(arr, 'a', -3) ).toEqual( [] );
            expect( indicesOf(arr, 'a', -4) ).toEqual( [1] );

            expect( indicesOf(arr, 'b', -1) ).toEqual( [] );
            expect( indicesOf(arr, 'b', -2) ).toEqual( [3] );
            expect( indicesOf(arr, 'b', -3) ).toEqual( [3] );

            expect( indicesOf(arr, 'foo', -2) ).toEqual( [] );
        });

        it('should handle fromIndex greater than length', function() {
            var arr = [1, 'a', 2, 'b', 1];

            expect( indicesOf(arr, 1, 10) ).toEqual( [] );
            expect( indicesOf(arr, 'a', 100) ).toEqual( [] );
            expect( indicesOf(arr, 2, 1000) ).toEqual( [] );
            expect( indicesOf(arr, 'b', 15) ).toEqual( [] );

            expect( indicesOf(arr, 'foo', 15) ).toEqual( [] );
        });

        it('should return an empty array if array is null/undefined', function() {
            expect( indicesOf(null, 1) ).toEqual( [] );
            expect( indicesOf(undefined, 1) ).toEqual( [] );

            expect( indicesOf(null, 1, 15) ).toEqual( [] );
            expect( indicesOf(undefined, 1, 15) ).toEqual( [] );
        });

    });

});
