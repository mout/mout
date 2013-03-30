define(['mout/array/indexOf'], function(indexOf){

    describe('array/indexOf()', function(){

        var idx = indexOf;

        it('should work in regular arrays', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( idx(arr, 1) ).toEqual( 0 );
            expect( idx(arr, 'a') ).toEqual( 1 );
            expect( idx(arr, 2) ).toEqual( 2 );
            expect( idx(arr, 'b') ).toEqual( 3 );

            expect( idx(arr, 'foo') ).toEqual( -1 );
        });

        it('should loop all items, even if sparse. see #64', function(){
            var arr = [];
            arr[0] = 'bar';
            arr[1] = 1;
            arr[3] = 'a';
            arr[6] = 2;
            arr[8] = 'b';
            arr[10] = undefined;

            // IMPORTANT!!
            // -----------
            // this behavior is different than ES5 Array#indexOf()
            expect( idx(arr, 1) ).toEqual( 1 );
            expect( idx(arr, 'a') ).toEqual( 3 );
            expect( idx(arr, 2) ).toEqual( 6 );
            expect( idx(arr, 'b') ).toEqual( 8 );
            expect( idx(arr, undefined) ).toEqual( 2 );

            expect( idx(arr, 'foo') ).toEqual( -1 );
        });

        it('should handle fromIndex', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( idx(arr, 1, 2) ).toEqual( -1 );
            expect( idx(arr, 'a', 2) ).toEqual( -1 );
            expect( idx(arr, 2, 2) ).toEqual( 2 );
            expect( idx(arr, 'b', 2) ).toEqual( 3 );

            expect( idx(arr, 'foo', 2) ).toEqual( -1 );
        });

        it('should handle fromIndex in sparse arrays. see #64', function(){
            var arr = [];
            arr[1] = 1;
            arr[3] = 'a';
            arr[6] = 2;
            arr[8] = 'b';

            expect( idx(arr, 1, 4) ).toEqual( -1 );
            expect( idx(arr, 'a', 4) ).toEqual( -1 );
            expect( idx(arr, 2, 4) ).toEqual( 6 );
            expect( idx(arr, 'b', 4) ).toEqual( 8 );

            expect( idx(arr, 'foo', 4) ).toEqual( -1 );
        });

        it('should handle negative fromIndex', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( idx(arr, 1, -2) ).toEqual( -1 );
            expect( idx(arr, 'a', -2) ).toEqual( -1 );
            expect( idx(arr, 2, -2) ).toEqual( 2 );
            expect( idx(arr, 'b', -2) ).toEqual( 3 );

            expect( idx(arr, 'foo', -2) ).toEqual( -1 );
        });

        it('should handle fromIndex greater than length', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( idx(arr, 1, 15) ).toEqual( -1 );
            expect( idx(arr, 'a', 15) ).toEqual( -1 );
            expect( idx(arr, 2, 15) ).toEqual( -1 );
            expect( idx(arr, 'b', 15) ).toEqual( -1 );

            expect( idx(arr, 'foo', 15) ).toEqual( -1 );
        });

        it('should return -1 when array is null/undefined', function(){
            expect( idx(null, 1) ).toBe( -1 );
            expect( idx(undefined, 1) ).toBe( -1 );
        });

    });

});
