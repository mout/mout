define(['mout/object/equals'], function(equals){

    describe('object/equals', function(){

        it('should return equal when objects have same properties and values', function(){
            expect( equals({ test: true }, { test: true }) ).toBe(true);

            var a = { foo: 'foo-value', bar: 'bar-value' };
            var b = { foo: 'foo-value', bar: 'bar-value' };
            expect( equals(a, b) ).toBe(true);
        });

        it('should consider empty objects equal', function() {
            expect( equals({}, {}) ).toBe(true);
        });

        it('should use strict equals for non-objects', function() {
            expect( equals('test', 'test') ).toBe(true);
            expect( equals('abc', '') ).toBe(false);
            expect( equals(null, null) ).toBe(true);
            expect( equals(null, void 0) ).toBe(false);
            expect( equals({}, null) ).toBe(false);
        });

        it('should require objects to have same properties', function() {
            var a = { test: true };
            var b = { test: true, special: true };
            expect( equals(a, b) ).toBe(false);
            expect( equals(b, a) ).toBe(false);
        });

        it('should require objects to have same values', function() {
            var a = { test: true, special: true };
            var b = { test: true, special: false };
            expect( equals(a, b) ).toBe(false);
        });

        it('should require object to have same constructor', function() {
            function A() { }
            function B() { }

            expect( equals(new A(), new B()) ).toBe(false);
        });

        it('should allow objects with same prototype', function() {
            function A() {
                this.id = 'test';
            }
            A.prototype.test = true;

            expect( equals(new A(), new A()) ).toBe(true);
        });

    });

});
