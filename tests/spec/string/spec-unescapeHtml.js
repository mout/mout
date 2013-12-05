define(['mout/string/unescapeHtml'], function (unescapeHtml) {

    describe('string/unescapeHtml()', function () {

        it('should convert entities into chars', function () {
            expect( unescapeHtml( '&lt;em&gt;&#39;lorem&#39;&lt;/em&gt; &amp; &quot;ipsum&quot;' ) )
                .toEqual( '<em>\'lorem\'</em> & "ipsum"' );
        });

        it('should convert decimal character references into chars', function() {
            expect( unescapeHtml('&#9;&#10;&#010;&#0010;') )
                .toEqual( '\t\n\n\n' );
        });

        it('should convert hexadecimal character references into chars', function() {
            expect( unescapeHtml('&#x2b;&#X2b;&#x02B;&#x002b;') )
                .toEqual( '++++' );
        });

        it('should return string with no escapes unchanged', function() {
            expect( unescapeHtml('foo') ).toBe( 'foo' );
        });

        it('should ignore invalid escapes', function() {
            expect( unescapeHtml('&test;') ).toEqual( '&test;' );
            expect( unescapeHtml('&12') ).toBe( '&12' );
            expect( unescapeHtml('&x12') ).toBe( '&x12' );
            expect( unescapeHtml('amp;') ).toBe( 'amp;' );
            expect( unescapeHtml('&;') ).toBe( '&;' );
            expect( unescapeHtml('&') ).toBe( '&' );
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

