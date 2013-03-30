define(['mout/array/min'], function (min) {

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


        it('should allow shorthand string iterator', function () {
            var arr = [{a:1,b:3}, {a:4,b:1}, {a:2,b:8}];
            expect( min(arr, 'a') ).toBe( arr[0] );
            expect( min(arr, 'b') ).toBe( arr[1] );
        });

        it('should pass thisObj to callback', function () {
            var arr = [{a:1, b:0}, {b:0.5}, {c:1.5}];
            var context = ['a', 'b', 'c'];
            function map(val, i) { return val[this[i]]; };

            expect( min(arr, map, context) ).toBe( arr[1] );
        });

        it('should return -Infinity if array is null/undefined', function () {
            expect( min(null) ).toBe( -Infinity );
            expect( min(undefined) ).toBe( -Infinity );
        });


    });

});
