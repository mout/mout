define(['src/lang/isUndefined'], function (isUndefined) {

    describe('lang/isUndefined()', function () {

        it('should detect if value is undefined', function () {

            expect( isUndefined(undefined) ).toBe( true );
            expect( isUndefined() ).toBe( true );

            expect( isUndefined('') ).toBe( false );
            expect( isUndefined(123) ).toBe( false );
            expect( isUndefined(null) ).toBe( false );
            expect( isUndefined({}) ).toBe( false );
            expect( isUndefined([]) ).toBe( false );

        });

    });

});
