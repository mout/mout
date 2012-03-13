define(['src/array/remove'], function (remove) {

    describe('array/remove()', function(){

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
        
        it('should not modify the array if the item does not exist', function(){
            var arr = [1, 'a', 2, 'b'];
            remove(arr, 'c');
            expect( arr ).toEqual([1, 'a', 2, 'b']);
        });

    });

});
