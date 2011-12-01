define(['src/lang/isRegExp'], function (isRegExp) {

    describe('lang/isRegExp()', function () {

        it('should detect if value is a RegExp', function () {

            expect( isRegExp(/\w+/) ).toBe( true );
            expect( isRegExp(new RegExp('\\w+', 'g')) ).toBe( true );

            expect( isRegExp('') ).toBe( false );
            expect( isRegExp(123) ).toBe( false );
            expect( isRegExp(null) ).toBe( false );
            expect( isRegExp({}) ).toBe( false );
            expect( isRegExp([]) ).toBe( false );

        });

    });

});
