define(['mout/object/max'], function(max){

    describe('object/max', function(){

        it('should return maximum value', function () {

            expect( max({a: 100, b: 2, c: 1, d: 3, e: 200}) ).toBe(200);
            expect( max({foo: 100, bar: 200}) ).toBe(200);
            expect( max({a: -10, b: 1, c: 0}) ).toBe(1);

        });

        it('should return Infinity if empty', function () {

            expect( max({}) ).toBe(Infinity);

        });

        it('should allow custom iterator', function () {

            expect( max({a: 1, b: 2, c: 3}, function(val){ return -val; }) ).toBe(1);

            expect( max({a: 'foo', b: 'lorem', c: 'amet'}, function(val){
                return val.length;
            }) ).toBe('lorem');

        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:0}
            };
            expect( max(obj, 'id') ).toEqual( obj.b  );
            expect( max(obj, 'amet') ).toBeUndefined();
        });


    });
});
