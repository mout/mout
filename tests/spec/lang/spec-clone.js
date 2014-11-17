define(['mout/lang/clone'], function(clone) {

    describe('lang/clone', function() {

        it('should not return source object', function() {
            var src = {};
            var result = clone(src);
            expect(result).not.toBe(src);
        });

        it('should copy source properties', function() {
            var src = { test: true };
            var result = clone(src);
            expect(result.test).toBe(true);
        });

        it('should not clone child objects', function() {
            var src = { test: {} };
            var result = clone(src);
            expect(result.test).toBe(src.test);
        });

        it('should clone arrays', function() {
            var src = [1, 2, 3];
            var result = clone(src);
            expect(result).not.toBe(src);
            expect(result).toEqual(src);
        });

        it('should clone RegExps', function() {
            var src = /test/gim;
            var result = clone(src);
            expect(result).not.toBe(src);
            expect(result).toEqual(src);
            expect(result.ignoreCase).toEqual(true);
            expect(result.multiline).toEqual(true);
            expect(result.global).toEqual(true);
        });

        it('should clone Dates', function() {
            var src = new Date();
            var result = clone(src);
            expect(result).not.toBe(src);
            expect(result).toEqual(src);
        });

        it('should not clone objects created with custom constructor', function() {
            function TestType() { }
            var src = new TestType();
            var result = clone(src);
            expect(result).toBe(src);
        });

    });

});
