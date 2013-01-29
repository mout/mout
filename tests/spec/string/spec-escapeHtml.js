define(['mout/string/escapeHtml'], function (escapeHtml) {

    describe('string/escapeHtml()', function () {

        it('should convert special chars into entities', function () {
            expect( escapeHtml('<em>\'lorem\'</em> & "ipsum"') )
                .toEqual( '&lt;em&gt;&#39;lorem&#39;&lt;/em&gt; &amp; &quot;ipsum&quot;' );
        });

        it('should treat null as empty string', function(){
            expect( escapeHtml(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( escapeHtml(void 0) ).toBe('');
        });

    });

});

