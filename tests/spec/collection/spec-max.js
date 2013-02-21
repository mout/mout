define(['mout/collection/max'], function(max){

    describe('collection/max', function(){

        it('should return maximum value (array)', function () {

            expect( max([100, 2, 1, 3, 200]) ).toBe(200);
            expect( max([100, 200]) ).toBe(200);
            expect( max([-10, 1, 0]) ).toBe(1);

        });

        it('should return Infinity if empty (array)', function () {

            expect( max([]) ).toBe(Infinity);

        });

        it('should allow custom iterator (array)', function () {

            expect( max([1,2,3], function(val){ return -val; }) ).toBe(1);

            expect( max(['foo', 'lorem', 'amet'], function(val){
                return val.length;
            }) ).toBe('lorem');

        });

        it('should return maximum value (object)', function () {

            expect( max({a: 100, b: 2, c: 1, d: 3, e: 200}) ).toBe(200);
            expect( max({foo: 100, bar: 200}) ).toBe(200);
            expect( max({a: -10, b: 1, c: 0}) ).toBe(1);

        });

        it('should return Infinity if empty (object)', function () {

            expect( max({}) ).toBe(Infinity);

        });

        it('should allow custom iterator (object)', function () {

            expect( max({a: 1, b: 2, c: 3}, function(val){ return -val; }) ).toBe(1);

            expect( max({a: 'foo', b: 'lorem', c: 'amet'}, function(val){
                return val.length;
            }) ).toBe('lorem');

        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:1},
                '1' : {foo:'bar', lorem:'ipsum', id:2},
                '2' : {foo:'bar', lorem:'ipsum', id:0}
            };
            var arr = [obj[0], obj[1], obj[2]];

            expect( max(obj, 'id') ).toEqual( obj[1] );
            expect( max(obj, 'amet') ).toBeUndefined();

            expect( max(arr, 'id') ).toEqual( obj[1] );
            expect( max(arr, 'amet') ).toBeUndefined();
        });


    });

});
