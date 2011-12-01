define(['src/lang/isNull'], function (isNull) {

    describe('lang/isNull()', function () {

        it('should detect if value is a Null', function () {

            expect( isNull(null) ).toBe( true );

            expect( isNull('') ).toBe( false );
            expect( isNull(123) ).toBe( false );
            expect( isNull([]) ).toBe( false );
            expect( isNull({}) ).toBe( false );

        });

    });

});
