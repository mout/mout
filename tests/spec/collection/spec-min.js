define(['mout/collection/min'], function(min){

    describe('collection/min', function(){

        it('should return minimum value (array)', function () {

            expect( min([100, 2, 1, 3, 200]) ).toBe(1);
            expect( min([100, 200]) ).toBe(100);
            expect( min([-10, 1, 0]) ).toBe(-10);

        });

        it('should return -Infinity if empty (array)', function () {

            expect( min([]) ).toBe(-Infinity);

        });

        it('should allow custom iterator (array)', function () {

            expect( min([1,2,3], function(val){ return -val; }) ).toBe(3);

            expect( min(['foo', 'lorem', 'amet'], function(val){
                return val.length;
            }) ).toBe('foo');

        });

        it('should return minimum value (object)', function () {

            expect( min({a: 100, b: 2, c: 1, d: 3, e: 200}) ).toBe(1);
            expect( min({foo: 100, bar: 200}) ).toBe(100);
            expect( min({a: -10, b: 1, c: 0}) ).toBe(-10);

        });

        it('should return -Infinity if empty (object)', function () {

            expect( min({}) ).toBe(-Infinity);

        });

        it('should allow custom iterator (object)', function () {

            expect( min({a: 1, b: 2, c: 3}, function(val){ return -val; }) ).toBe(3);

            expect( min({a: 'foo', b: 'lorem', c: 'amet'}, function(val){
                return val.length;
            }) ).toBe('foo');

        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:1},
                '1' : {foo:'bar', lorem:'ipsum', id:2},
                '2' : {foo:'bar', lorem:'ipsum', id:0}
            };
            var arr = [obj[0], obj[1], obj[2]];

            expect( min(obj, 'id') ).toEqual( obj[2] );
            expect( min(obj, 'amet') ).toBeUndefined();

            expect( min(arr, 'id') ).toEqual( obj[2] );
            expect( min(arr, 'amet') ).toBeUndefined();
        });


    });

});
