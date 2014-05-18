define(['mout/lang/isPrimitive'], function(isPrimitive) {

    describe('lang/isPrimitive', function() {

        it('should return true when primitive value', function() {
            expect( isPrimitive(null) ).toBe(true);
            expect( isPrimitive(undefined) ).toBe(true);
            expect( isPrimitive(1) ).toBe(true);
            expect( isPrimitive('foo') ).toBe(true);
            expect( isPrimitive(true) ).toBe(true);
            expect( isPrimitive(false) ).toBe(true);
            expect( isPrimitive(NaN) ).toBe(true);
            expect( isPrimitive(Infinity) ).toBe(true);
        });

        it('should return false when not primitive value', function() {
            expect( isPrimitive({}) ).toBe(false);
            expect( isPrimitive([]) ).toBe(false);
            expect( isPrimitive(/./) ).toBe(false);
            expect( isPrimitive(function() {}) ).toBe(false);
            expect( isPrimitive(new function() {}) ).toBe(false);
            expect( isPrimitive(new Number) ).toBe(false);
            expect( isPrimitive(new String) ).toBe(false);
            expect( isPrimitive(new Boolean) ).toBe(false);
            expect( isPrimitive(new Date) ).toBe(false);
            expect( isPrimitive(new Error) ).toBe(false);
        });
    });

});
