define(['src/array/append'], function (append) {

    describe('array/append()', function(){

        it('should append every item of the second array to the end of first array', function(){

            var arr = [1, 2, 3],
                arr2 = [3, 4, 5],
                result;

            result = append(arr, arr2);
            expect(arr).toBe( result );
            expect(arr).toEqual([1, 2, 3, 3, 4, 5]);
        });

    });
});
