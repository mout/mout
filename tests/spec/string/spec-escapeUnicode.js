define(['mout/string/escapeUnicode'], function(escapeUnicode){

    describe('string/escapeUnicode', function(){

        it('should escape only especial chars by default', function(){
            expect( escapeUnicode('before éãôø after éãôø') ).toBe('before \\u00e9\\u00e3\\u00f4\\u00f8 after \\u00e9\\u00e3\\u00f4\\u00f8');
        });

        it('should work with empty strings', function () {
            expect( escapeUnicode('') ).toBe('');
        });

        it('should allow escaping everything', function () {
            expect( escapeUnicode('føo bår', true) ).toEqual( '\\u0066\\u00f8\\u006f\\u0020\\u0062\\u00e5\\u0072' );
        });

        it('should treat null as empty string', function(){
            expect( escapeUnicode(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( escapeUnicode(void 0) ).toBe('');
        });

    });

});
