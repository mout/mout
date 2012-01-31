define(['src/array/min'], function (min) {

    describe('array/min()', function () {

        it('should return minimum value', function () {

            expect( min([100, 2, 1, 3, 200]) ).toBe(1);
            expect( min([100, 200]) ).toBe(100);
            expect( min([-10, 1, 0]) ).toBe(-10);

        });

        it('should return -Infinity if empty', function () {

            expect( min([]) ).toBe(-Infinity);

        });

        it('should allow custom iterator', function () {

            expect( min([1,2,3], function(val){ return -val; }) ).toBe(3);

            expect( min(['foo', 'lorem', 'amet'], function(val){
                return val.length;
            }) ).toBe('foo');

        });

    });

});
