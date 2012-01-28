define(['src/array/insert'], function (insert) {

    describe('array/insert()', function(){

        it('should push and return true if not present', function(){

            var arr = [1, 2, 3];

            expect( insert(arr, 3) ).toBe( false );
            expect( arr.length ).toBe( 3 );
            expect( arr[0] ).toBe( 1 );
            expect( arr[1] ).toBe( 2 );
            expect( arr[2] ).toBe( 3 );

            expect( insert(arr, 4) ).toBe( true );
            expect( arr.length ).toBe( 4 );
            expect( arr[0] ).toBe( 1 );
            expect( arr[1] ).toBe( 2 );
            expect( arr[2] ).toBe( 3 );
            expect( arr[3] ).toBe( 4 );
        });

    });
});
