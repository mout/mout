define(['mout/array/max'], function (max) {

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

        it('should allow shorthand string iterator', function () {
            var arr = [{a:1,b:3}, {a:4,b:5}, {a:2,b:8}];
            expect( max(arr, 'a') ).toBe( arr[1] );
            expect( max(arr, 'b') ).toBe( arr[2] );
        });

        it('should pass thisObj to callback', function () {
            var arr = [{a:1, b:3}, {b:2}, {c:1.5}];
            var context = ['a', 'b', 'c'];
            function map(val, i) { return val[this[i]]; }

            expect( max(arr, map, context) ).toBe( arr[1] );
        });

        it('should return Infinity if array is null/undefined', function () {
            expect( max(null) ).toBe( Infinity );
            expect( max(undefined) ).toBe( Infinity );
        });


    });

});
