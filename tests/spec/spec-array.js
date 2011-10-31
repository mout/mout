define(['src/array'], function(arrayUtils){

    describe('array', function(){


        describe('indexOf()', function(){

            var idx = arrayUtils.indexOf;

            it('should work in regular arrays', function(){
                var arr = [1, 'a', 2, 'b'];

                expect( idx(arr, 1) ).toEqual( 0 );
                expect( idx(arr, 'a') ).toEqual( 1 );
                expect( idx(arr, 2) ).toEqual( 2 );
                expect( idx(arr, 'b') ).toEqual( 3 );

                expect( idx(arr, 'foo') ).toEqual( -1 );
            });

            it('should work in sparse arrays', function(){
                var arr = [];
                arr[1] = 1;
                arr[3] = 'a';
                arr[6] = 2;
                arr[8] = 'b';

                expect( idx(arr, 1) ).toEqual( 1 );
                expect( idx(arr, 'a') ).toEqual( 3 );
                expect( idx(arr, 2) ).toEqual( 6 );
                expect( idx(arr, 'b') ).toEqual( 8 );

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

            it('should handle fromIndex in sparse arrays', function(){
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

        });

        describe('lastIndexOf()', function(){

            var lastIdx = arrayUtils.lastIndexOf;

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
                arr[6] = 2;
                arr[8] = 'b';

                expect( lastIdx(arr, 1) ).toEqual( 1 );
                expect( lastIdx(arr, 'a') ).toEqual( 3 );
                expect( lastIdx(arr, 2) ).toEqual( 6 );
                expect( lastIdx(arr, 'b') ).toEqual( 8 );

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
                expect( lastIdx(arr, 'b', -2) ).toEqual( -1 );

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

        describe('isSparse()', function(){

            var isSparse = arrayUtils.isSparse;

            it('should check if array contain empty items', function(){
                var arr = ['foo'];
                arr[6] = 'bar';
                expect( isSparse(arr) ).toBe( true );
            });

            it('should not give false positives', function(){
                var arr = ['foo', false, null, 123, 'bar'];
                expect( isSparse(arr) ).toBe( false );
            });

            it('should consider undefined as empty', function(){
                var arr = ['foo', false, null, 123, undefined, 'bar'];
                expect( isSparse(arr) ).toBe( true );
            });

        });

        describe('isSparse()', function(){

            var isSparse = arrayUtils.isSparse;

            it('should check if array contain empty items', function(){
                var arr = ['foo'];
                arr[6] = 'bar';
                expect( isSparse(arr) ).toBe( true );
            });

            it('should not give false positives', function(){
                var arr = ['foo', false, null, 123, 'bar'];
                expect( isSparse(arr) ).toBe( false );
            });

            it('should consider undefined as empty', function(){
                var arr = ['foo', false, null, 123, undefined, 'bar'];
                expect( isSparse(arr) ).toBe( true );
            });

        });

        describe('remove()', function(){

            var remove = arrayUtils.remove;

            it('should work in normal array', function(){
                var arr = [1, 'a', 2, 'b'];

                expect( arr.length ).toEqual( 4 );
                expect( arr[1] ).toBe( 'a' );
                remove(arr, 'a');
                expect( arr[1] ).toBe( 2 );
                expect( arr.length ).toEqual( 3 );
            });

            it('should work in sparse array', function(){
                var arr = [];
                arr[1] = 1;
                arr[3] = 'a';
                arr[6] = 2;
                arr[8] = 'b';

                expect( arr.length ).toEqual( 9 );
                expect( arr[3] ).toBe( 'a' );
                remove(arr, 'a');
                expect( arr[3] ).toBeUndefined();
                expect( arr.length ).toEqual( 8 );
            });

        });

        describe('removeAll()', function(){

            var removeAll = arrayUtils.removeAll;

            it('should work in normal array', function(){
                var arr = [1, 'a', 2, 'b', 'a', 'a'];

                expect( arr.length ).toEqual( 6 );
                expect( arr[1] ).toBe( 'a' );
                removeAll(arr, 'a');
                expect( arr[1] ).toBe( 2 );
                expect( arr.length ).toEqual( 3 );
            });

            it('should work in sparse array', function(){
                var arr = [];
                arr[1] = 1;
                arr[3] = 'a';
                arr[6] = 2;
                arr[8] = 'b';
                arr[9] = 'a';
                arr[15] = 'a';

                expect( arr.length ).toEqual( 16 );
                expect( arr[3] ).toBe( 'a' );
                removeAll(arr, 'a');
                expect( arr[3] ).toBeUndefined();
                expect( arr.length ).toEqual( 13 );
            });

        });


        describe('forEach()', function(){

            var forEach = arrayUtils.forEach;

            it('should loop and pass params to callback', function(){
                var result = 0;
                var items = [1,2,3,4,5];

                forEach(items, function(val, i, arr){
                    expect( arr ).toBe( items );
                    expect( val ).toBe( items[i] );
                    result += val;
                });

                expect( result ).toBe( 15 );
            });

        });


        describe('filter()', function(){

            var filter = arrayUtils.filter;

            it('should filter items', function(){
                var items = [1,2,3,4,5];
                var result = filter(items, function(val, i, arr){
                    return (val % 2) !== 0;
                });

                expect( result.length ).toEqual( 3 );
                expect( items.length ).toEqual( 5 ); //make sure it doesn't replace original array

                expect( result[0] ).toEqual( 1 );
                expect( result[1] ).toEqual( 3 );
                expect( result[2] ).toEqual( 5 );
            });

        });


        describe('map()', function(){

            var map = arrayUtils.map;

            it('should return a new array with modified items', function () {
                var base = [1,2,3,4,5];
                var r = map(base, function(val, i){
                    return val + i;
                });

                expect( r[0] ).toBe( 1 );
                expect( r[1] ).toBe( 3 );
                expect( r[2] ).toBe( 5 );
                expect( r[3] ).toBe( 7 );
                expect( r[4] ).toBe( 9 );
            });

        });


        describe('unique()', function(){

            var unique = arrayUtils.unique;

            it('should remove duplicates', function(){

                var source = ['a', 1, 2, 'c', 'b', 2 , 1, 'b', 'c'];
                var result = unique(source);

                expect( result.length ).toEqual( 5 );
                expect( source.length ).toEqual( 9 );

                expect( result.join(',') ).toEqual('a,2,1,b,c');

            });

        });




    });

});
