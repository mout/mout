define(['src/array/removeAll'], function (removeAll) {

    describe('array/removeAll()', function(){

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

});
