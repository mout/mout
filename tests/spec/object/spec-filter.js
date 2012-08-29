define(['src/object/filter'], function(filter) {

    describe('object/filter()', function() {

        it('should include values where callback returns true', function() {
            var obj = {
                foo: true,
                bar: false
            };

            var result = filter(obj, function(v) { return v; });
            expect(result).toEqual({ foo: true });
        });

        it('should include values where return value is truthy', function() {
            var obj = { foo: 'value' };

            var result = filter(obj, function(v) { return 1; });
            expect(result).toEqual(obj);
        });

        it('should exclude values where return value is falsy', function() {
            var obj = { foo: 'value' };

            var result = filter(obj, function(v) { return 0; });
            expect(result).toEqual({});
        });

        it('should pass key name as second parameter', function() {
            var obj = {
                foo: null,
                bar: null
            };

            var result = filter(obj, function(v, k) { return k === 'foo'; });
            expect(result).toEqual({ foo: null });
        });

        it('should pass original object as third parameter', function() {
            var obj = { foo: null };

            var result = filter(obj, function(v, k, data) {
                expect(data).toBe(obj);
                return true;
            });
            expect(result).toEqual(obj);
        });

        it('should use provided this object', function() {
            var obj = { foo: null },
                thisObj = {};

            var result = filter(obj, function() {
                expect(this).toBe(thisObj);
                return true;
            }, thisObj);
            expect(result).toEqual(obj);
        });

    });

});
