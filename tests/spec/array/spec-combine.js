define(['src/array/combine'], function (append) {

    describe('array/combine()', function(){

        it('should append every item of the second array to the end of first array, ignoring duplicates', function(){

            var arr = [1, 2, 3],
                arr2 = [3, 4, 5],
                result;

            result = append(arr, arr2);
            expect(arr).toBe( result );
            expect(arr).toEqual([1, 2, 3, 4, 5]);
        });

    });
});
