define(['mout/string/escapeRegExp'], function (escapeRegExp) {

    describe('string/escapeRegExp', function () {

        it('should escape special chars', function () {
            expect( escapeRegExp('lorem.ipsum') ).toEqual( 'lorem\\.ipsum' );
            expect( escapeRegExp("\\.+*?^$[](){}/'#") ).toEqual(
                "\\\\\\.\\+\\*\\?\\^\\$\\[\\]\\(\\)\\{\\}\\/\\'\\#");
        });

        it('should treat null as empty string', function(){
            expect( escapeRegExp(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( escapeRegExp(void 0) ).toBe('');
        });

    });

});
