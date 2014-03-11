define(['mout/lang/isEmpty'], function (isEmpty) {

    describe('lang/isEmpty', function () {

        it('should work on strings', function () {
            expect( isEmpty('') ).toEqual( true );
            expect( isEmpty('foo') ).toEqual( false );
        });

        it('should work on arrays', function () {
            expect( isEmpty([]) ).toEqual( true );
            expect( isEmpty([1]) ).toEqual( false );
            expect( isEmpty([1, 2]) ).toEqual( false );
        });

        it('should work on objects', function () {
            expect( isEmpty({}) ).toEqual( true );
            expect( isEmpty({a:1}) ).toEqual( false );
            expect( isEmpty({a:1, b:2}) ).toEqual( false );
        });

        it('should work on functions', function () {
            var fn = function(){};
            var fn_2 = function(){};
            fn_2.bar = 'ipsum';
            expect( isEmpty(fn) ).toEqual( true );
            expect( isEmpty(fn_2) ).toEqual( false );
        });

        it('should return true for "null" and "undefined"', function() {
            expect( isEmpty(null) ).toEqual( true );
            expect( isEmpty(undefined) ).toEqual( true );
        });

        it('should return false for numbers', function () {
            expect( isEmpty(0) ).toEqual( false );
            expect( isEmpty(123) ).toEqual( false );
            expect( isEmpty(-3) ).toEqual( false );
            expect( isEmpty(NaN) ).toEqual( false );
            expect( isEmpty(Infinity) ).toEqual( false );
            expect( isEmpty(-Infinity) ).toEqual( false );
        });

        it('should return false for booleans', function() {
            expect( isEmpty(false) ).toEqual( false );
            expect( isEmpty(true) ).toEqual( false );
        });

    });

});
