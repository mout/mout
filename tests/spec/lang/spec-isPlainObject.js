define(['mout/lang/isPlainObject'], function(isPlainObject) {

    describe('lang/isPlainObject', function() {

        it('should return true when plain object', function() {
            expect( isPlainObject({}) ).toBe(true);
            expect( isPlainObject({ test: true }) ).toBe(true);
            expect( isPlainObject(new Object()) ).toBe(true);
        });

        it('should return false when not an object', function() {
            expect( isPlainObject(true) ).toBe(false);
            expect( isPlainObject(null) ).toBe(false);
            expect( isPlainObject(/test/) ).toBe(false);
            expect( isPlainObject(function(){}) ).toBe(false);
            expect( isPlainObject(1) ).toBe(false);
            expect( isPlainObject([1]) ).toBe(false);
            expect( isPlainObject(new Number(1)) ).toBe(false);
        });

        it('should return false when created with constructor function', function() {
            function Test() {
                this.test = true;
            }
            Test.prototype.isTest = true;

            expect( isPlainObject(new Test()) ).toBe(false);
        });
    });

});
