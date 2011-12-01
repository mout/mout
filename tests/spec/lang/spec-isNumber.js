define(['src/lang/isNumber'], function (isNumber) {

    describe('lang/isNumber()', function () {

        it('should detect if value is a Number', function () {

            expect( isNumber(0) ).toBe( true );
            expect( isNumber(123) ).toBe( true );
            expect( isNumber(new Number(123)) ).toBe( true );
            expect( isNumber(Number('123')) ).toBe( true );

            expect( isNumber('') ).toBe( false );
            expect( isNumber(false) ).toBe( false );
            expect( isNumber(null) ).toBe( false );
            expect( isNumber({}) ).toBe( false );

        });

    });

});
