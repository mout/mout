define(['mout/lang/isWindow'], function (isWindow) {

    describe('lang/isWindow()', function () {

        it('should detect if value is window object', function () {

            expect( isWindow(undefined) ).toBe( false );
            expect( isWindow() ).toBe( false );
            expect( isWindow(null) ).toBe( false );

            var window = {};
            window.window = window;

            expect( isWindow(window) ).toBe( true );

        });

    });

});
