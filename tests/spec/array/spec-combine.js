define(['mout/array/combine'], function (combine) {

    describe('array/combine()', function(){

        it('should append every item of the second array to the end of first array, ignoring duplicates', function(){

            var arr = [1, 2, 3],
                arr2 = [3, 4, 5],
                result;

            result = combine(arr, arr2);
            expect(arr).toBe( result );
            expect(arr).toEqual([1, 2, 3, 4, 5]);
        });

        it('should allow null second array', function(){
            var arr = [1];
            combine(arr, null);
            expect( arr ).toEqual( [1] );
        });

        it('should allow undefined second array', function(){
            var arr = [1];
            combine(arr, undefined);
            expect( arr ).toEqual( [1] );
        });

    });
});
