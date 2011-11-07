define(['src/string/typecast'], function (typecast) {

    describe('string/typecast()', function () {
        it('should typecast values if Number, Boolean, null or undefined', function () {
            expect( typecast('true') ).toBe( true );
            expect( typecast('false') ).toBe( false );
            expect( typecast('123') ).toBe( 123 );
            expect( typecast('123.45') ).toBe( 123.45 );
            expect( typecast('null') ).toBe( null );
            expect( typecast(null) ).toBe( null );
            expect( typecast('undefined') ).toBe( undefined );
            expect( typecast() ).toBe( undefined );
            expect( typecast('foo') ).toBe( "foo" );
        });
    });
});
