define(['src/string/escapeRegExp'], function (escapeRegExp) {

    describe('string/escapeRegExp', function () {

        it('should escape special chars', function () {

            expect( escapeRegExp('lorem.ipsum') ).toEqual( 'lorem\\.ipsum' );
            expect( escapeRegExp("\\.+*?^$[](){}/'#") ).toEqual( "\\\\\\.\\+\\*\\?\\^\\$\\[\\]\\(\\)\\{\\}\\/\\'\\#" );

        });

    });


});
