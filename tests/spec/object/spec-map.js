define(['src/object/map'], function(map) {

    describe('object/map()', function() {

        it('should map the values', function() {
            var obj = {
                a: 1,
                b: 2
            };

            var result = map(obj, function(x) { return x + 1; });
            expect(result.a).toEqual(2);
            expect(result.b).toEqual(3);
        });

        it('should pass key as second parameter', function() {
            var obj = {
                a: null,
                b: null
            };

            var result = map(obj, function(val, key) { return key; });
            expect(result.a).toEqual('a');
            expect(result.b).toEqual('b');
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

            var result = map(obj, function() { return this }, thisObj);
            expect(result.foo).toBe(thisObj);
        });

    });

});
