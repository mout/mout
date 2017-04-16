define(['mout/array/empty', 'mout/lang/isArray'], function(empty, isArray){

    describe('array/empty()', function(){

        it('should empty passed array', function() {
            // arrange
            var array = [1, 2, 3, 4, 5];

            // assert
            expect(empty(array).length).toBe(0);
        });

        it('should remove all values from the array', function() {
            // arrange
            var array, result, i;
            array = [1, 2, 3, 4, 5];

            // act
            result = empty(array);

            // assert
            for (i = 0; i < 5; i++) {
                expect(result[i]).not.toBeDefined();
            }
        });

        it('should modify the passed array instead of returning a new one', function() {
            // arrange
            var array = [1, 2, 3, 4, 5];

            // assert
            expect(empty(array)).toBe(array);
        });

        it('should return a new array if passed value is not an array', function() {
            // arrange
            var value, result;
            value = '';

            // act
            result = empty(value);

            // assert
            expect(isArray(result)).toBe(true);
            expect(result.length).toBe(0);
        });

    });

});
