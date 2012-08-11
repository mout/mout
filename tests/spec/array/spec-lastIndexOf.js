define(['src/array/lastIndexOf'], function (lastIndexOf) {

    describe('array/lastIndexOf()', function(){

        var lastIdx = lastIndexOf;

        it('should work in regular arrays', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( lastIdx(arr, 1) ).toEqual( 0 );
            expect( lastIdx(arr, 'a') ).toEqual( 1 );
            expect( lastIdx(arr, 2) ).toEqual( 2 );
            expect( lastIdx(arr, 'b') ).toEqual( 3 );

            expect( lastIdx(arr, 'foo') ).toEqual( -1 );
        });

        it('should work in sparse arrays', function(){
            var arr = [];
            arr[1] = 1;
            arr[3] = 'a';
            arr[4] = undefined; // it's a trap!
            arr[6] = 2;
            arr[8] = 'b';

            expect( lastIdx(arr, 1) ).toEqual( 1 );
            expect( lastIdx(arr, 'a') ).toEqual( 3 );
            expect( lastIdx(arr, 2) ).toEqual( 6 );
            expect( lastIdx(arr, 'b') ).toEqual( 8 );
            expect( lastIdx(arr, undefined) ).toEqual( 4 );

            expect( lastIdx(arr, 'foo') ).toEqual( -1 );
        });

        it('should handle fromIndex', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( lastIdx(arr, 1, 2) ).toEqual( 0 );
            expect( lastIdx(arr, 'a', -4) ).toEqual( -1 );
            expect( lastIdx(arr, 2, 2) ).toEqual( 2 );
            expect( lastIdx(arr, 'b', 2) ).toEqual( -1 );

            expect( lastIdx(arr, 'foo', 2) ).toEqual( -1 );
        });

        it('should handle fromIndex in sparse arrays', function(){
            var arr = [];
            arr[1] = 1;
            arr[3] = 'a';
            arr[6] = 2;
            arr[8] = 'b';

            expect( lastIdx(arr, 1, 0) ).toEqual( -1 );
            expect( lastIdx(arr, 'a', 2) ).toEqual( -1 );
            expect( lastIdx(arr, 2, 7) ).toEqual( 6 );
            expect( lastIdx(arr, 'b', 8) ).toEqual( 8 );

            expect( lastIdx(arr, 'foo', 4) ).toEqual( -1 );
        });

        it('should handle negative fromIndex', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( lastIdx(arr, 1, -2) ).toEqual( 0 );
            expect( lastIdx(arr, 'a', -2) ).toEqual( 1 );
            expect( lastIdx(arr, 2, -2) ).toEqual( 2 );
            expect( lastIdx(arr, 'b', -1) ).toEqual( 3 );
            expect( lastIdx(arr, 'b', -2) ).toEqual( -1 );
            expect( lastIdx(arr, 'b', -3) ).toEqual( -1 );

            expect( lastIdx(arr, 'foo', -2) ).toEqual( -1 );
        });

        it('should handle fromIndex greater than length', function(){
            var arr = [1, 'a', 2, 'b'];

            expect( lastIdx(arr, 1, 15) ).toEqual( 0 );
            expect( lastIdx(arr, 'a', 15) ).toEqual( 1 );
            expect( lastIdx(arr, 2, 15) ).toEqual( 2 );
            expect( lastIdx(arr, 'b', 15) ).toEqual( 3 );

            expect( lastIdx(arr, 'foo', 15) ).toEqual( -1 );
        });

    });

});
