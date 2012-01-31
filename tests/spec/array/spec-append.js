define(['src/array/append'], function (append) {

    describe('array/append()', function(){

        it('should append every item of the second array to the end of first array', function(){

            var arr = [1, 2, 3],
                arr2 = [3, 4, 5],
                result;

            result = append(arr, arr2);
            expect(arr).toBe( result );
            expect(arr.length).toBe( 6 );

            expect( arr[0] ).toBe( 1 );
            expect( arr[1] ).toBe( 2 );
            expect( arr[2] ).toBe( 3 );
            expect( arr[3] ).toBe( 3 );
            expect( arr[4] ).toBe( 4 );
            expect( arr[5] ).toBe( 5 );
        });

    });
});
