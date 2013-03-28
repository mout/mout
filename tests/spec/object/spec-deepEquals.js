define(['mout/object/deepEquals'], function(deepEquals){

    describe('object/deepEquals', function(){

        it('should check object values', function(){
            expect( deepEquals({}, {}) ).toBe(true);
            expect( deepEquals({ a: 1 }, { a: 1 }) ).toBe(true);
            expect( deepEquals({ a: 1 }, { a: 2 }) ).toBe(false);
        });

        it('should recursively check values', function() {
            var a = { value: { a: 1 } };
            var b = { value: { a: 1 } };
            expect( deepEquals(a, b) ).toBe(true);

            b.a = 2;
            expect( deepEquals(a, b) ).toBe(false);
        });

        it('should ensure objects have same properties', function() {
            var a = { value: { a: 1 } };
            var b = { value: { a: 1, b: 2 } };
            expect( deepEquals(a, b) ).toBe(false);
            expect( deepEquals(b, a) ).toBe(false);
        });

        it('should ignore order of keys', function() {
            var a = { value: { a: 1, b: 2 } };
            var b = { value: { b: 2, a: 1 } };
            expect( deepEquals(a, b) ).toBe(true);
        });

        it('should use strict equals for non-objects', function() {
            expect( deepEquals({}, null) ).toBe(false);
            expect( deepEquals(null, {}) ).toBe(false);
            expect( deepEquals(null, null) ).toBe(true);
            expect( deepEquals(null, undefined) ).toBe(false);
        });

        it('should only check object\'s own properties', function() {
            function A() { }
            A.prototype.isA = true;
            function B() { }
            B.prototype.isA = false;

            var a = { foo: new A() };
            var b = { foo: new B() };

            expect( deepEquals(a, b) ).toBe(true);
        });

        it('should allow custom compare function', function() {
            var a = { a: 1, b: { value: 2 } };
            var b = { a: '1', b: { value: '02.0' } };

            function numericCompare(a, b) {
                return +a === +b;
            }

            expect( deepEquals(a, b, numericCompare) ).toBe(true);
        });

    });

});
