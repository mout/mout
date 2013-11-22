define(['mout/object/map'], function(map) {

    describe('object/map()', function() {

        it('should return a new object with updated values', function() {
            var obj = {
                a: 1,
                b: 2
            };

            var result = map(obj, function(x) { return x + 1; });
            expect(result.a).toEqual(2);
            expect(result.b).toEqual(3);
            expect(result).not.toBe(obj);
        });

        it('should pass key as second parameter', function() {
            var obj = {
                a: null,
                b: null
            };

            var result = map(obj, function(val, key) { return key; });
            expect(result.a).toEqual('a');
            expect(result.b).toEqual('b');
            expect(result).not.toBe(obj);
        });

        it('should pass object as third parameter', function() {
            var obj = {
                a: null,
                b: null
            };

            var result = map(obj, function(v, k, obj) { return obj; });
            expect(result.a).toBe(obj);
            expect(result.b).toBe(obj);
        });

        it('should keep undefined/null properties', function() {
            var obj = {
                u: undefined,
                n: null
            };

            var result = map(obj, function(v) { return v; });
            expect('u' in obj).toBe(true);
            expect(obj.u).toBeUndefined();
            expect(obj.n).toBeNull();
        });

        it('should use provided this object', function() {
            var obj = { foo: null },
                thisObj = {};

            var result = map(obj, function() { return this; }, thisObj);
            expect(result.foo).toBe(thisObj);
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:0}
            };
            expect( map(obj, 'foo') ).toEqual( {a:'bar', b:'bar',c:'bar'} );
            expect( map(obj, 'id') ).toEqual( {a:1,b:2,c:0} );
            expect( map(obj, 'amet') ).toEqual( {a:undefined,b:undefined,c:undefined} );
        });


        it('should return a new object with unchanged values if no callback', function () {
            var obj = {
                a: 1,
                b: 2
            };
            var result = map(obj);
            expect(result).toEqual({a: 1, b:2});
            expect(result).not.toBe(obj);
        });

    });

});
