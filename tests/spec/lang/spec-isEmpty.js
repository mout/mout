define(['src/lang/isEmpty'], function (isEmpty) {

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

    });

});
