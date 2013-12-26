define(['mout/string/unescapeHtml'], function (unescapeHtml) {

    describe('string/unescapeHtml()', function () {

        it('should convert &amp;', function() {
            expect( unescapeHtml('foo &amp; bar') ).toEqual( 'foo & bar' );
        });

        it('should convert &quot;', function() {
            expect( unescapeHtml('&quot;foo&quot;') ).toEqual( '"foo"' );
        });

        it('should convert &gt; and &lt;', function() {
            expect( unescapeHtml('&lt;foo&gt;') ).toEqual( '<foo>' );
        });

        it('should convert &#39;', function() {
            expect( unescapeHtml('&#39;foo&#39;') ).toEqual( '\'foo\'' );
        });

        it('should accept leading zeros in &#39;', function() {
            expect( unescapeHtml('&#0039;foo&#039;') ).toEqual( '\'foo\'' );
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

