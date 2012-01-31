define(['src/array/max'], function (max) {

    describe('array/max()', function () {

        it('should return maximum value', function () {

            expect( max([100, 2, 1, 3, 200]) ).toBe(200);
            expect( max([100, 200]) ).toBe(200);
            expect( max([-10, 1, 0]) ).toBe(1);

        });

        it('should return Infinity if empty', function () {

            expect( max([]) ).toBe(Infinity);

        });

        it('should allow custom iterator', function () {

            expect( max([1,2,3], function(val){ return -val; }) ).toBe(1);

            expect( max(['foo', 'lorem', 'amet'], function(val){
                return val.length;
            }) ).toBe('lorem');

        });

    });

});
