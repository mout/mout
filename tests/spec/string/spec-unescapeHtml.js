define(['mout/string/unescapeHtml'], function (unescapeHtml) {

    describe('string/unescapeHtml()', function () {

        it('should convert entities into chars', function () {
            expect( unescapeHtml( '&lt;em&gt;&#39;lorem&#39;&lt;/em&gt; &amp; &quot;ipsum&quot;' ) )
                .toEqual( '<em>\'lorem\'</em> & "ipsum"' );
        });

        it('should return empty string if no argument', function () {
            expect( unescapeHtml() ).toBe( '' );
        });

        it('should treat null as empty string', function(){
            expect( unescapeHtml(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( unescapeHtml(void 0) ).toBe('');
        });

    });

});

