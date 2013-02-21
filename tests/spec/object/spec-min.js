define(['mout/object/min'], function(min){

    describe('object/min', function(){

        it('should return minimum value', function () {

            expect( min({a: 100, b: 2, c: 1, d: 3, e: 200}) ).toBe(1);
            expect( min({foo: 100, bar: 200}) ).toBe(100);
            expect( min({a: -10, b: 1, c: 0}) ).toBe(-10);

        });

        it('should return -Infinity if empty', function () {

            expect( min({}) ).toBe(-Infinity);

        });

        it('should allow custom iterator', function () {

            expect( min({a: 1, b: 2, c: 3}, function(val){ return -val; }) ).toBe(3);

            expect( min({a: 'foo', b: 'lorem', c: 'amet'}, function(val){
                return val.length;
            }) ).toBe('foo');

        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:0}
            };
            expect( min(obj, 'id') ).toEqual( obj.c  );
            expect( min(obj, 'amet') ).toBeUndefined();
        });


    });
});
