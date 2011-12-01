define(['src/lang/isArray'], function (isArray) {

    describe('lang/isArray()', function () {

        it('should detect if value is a Array', function () {

            expect( isArray([1, 'foo']) ).toBe( true );
            expect( isArray(new Array(3)) ).toBe( true );

            expect( isArray('') ).toBe( false );
            expect( isArray(123) ).toBe( false );
            expect( isArray(null) ).toBe( false );
            expect( isArray({}) ).toBe( false );

        });

    });

});
