define(['src/lang/isArguments'], function (isArguments) {

    describe('lang/isArguments()', function () {

        it('should detect if value is arguments', function () {

            expect( isArguments(arguments) ).toBe( true );

            expect( isArguments('') ).toBe( false );
            expect( isArguments(123) ).toBe( false );
            expect( isArguments(null) ).toBe( false );
            expect( isArguments({}) ).toBe( false );
            expect( isArguments([]) ).toBe( false );

        });

    });

});
