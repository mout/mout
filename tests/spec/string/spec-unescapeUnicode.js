define(['mout/string/unescapeUnicode'], function(unescapeUnicode){

    describe('string/unescapeUnicode', function(){

        it('should unescape unicode chars', function(){
            expect( unescapeUnicode('before \\u00e9\\u00e3\\u00f4\\u00f8 after \\u00e9\\u00e3\\u00f4\\u00f8') ).toBe('before éãôø after éãôø');
        });

        it('should not affect regular chars or non-unicode scapes', function () {
            expect( unescapeUnicode('foo \n bar \t \\x45') ).toEqual('foo \n bar \t \\x45');
        });

        it('should work with empty strings and null', function () {
            expect( unescapeUnicode('') ).toBe('');
            expect( unescapeUnicode() ).toBe('');
        });

        it('should treat null as empty string', function(){
            expect( unescapeUnicode(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( unescapeUnicode(void 0) ).toBe('');
        });

        it('should work with escaped printable ASCII chars as well', function () {
            expect( unescapeUnicode('\\u0066\\u00f8\\u006f\\u0020\\u0062\\u00e5\\u0072') ).toEqual( 'føo bår' );
        });

    });

});
