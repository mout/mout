define(['src/lang/isObject'], function (isObject) {

    describe('lang/isObject()', function () {

        it('should detect if value is an object', function () {

            expect( isObject({}) ).toBe( true );
            expect( isObject(new function(){}) ).toBe( true );

            expect( isObject('') ).toBe( false );
            expect( isObject(123) ).toBe( false );
            expect( isObject(null) ).toBe( false );
            expect( isObject([]) ).toBe( false );

        });

    });

});
