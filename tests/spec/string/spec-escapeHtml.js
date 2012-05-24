define(['src/string/escapeHtml'], function (escapeHtml) {

    describe('string/escapeHtml()', function () {

        it('should convert special chars into entities', function () {
            expect( escapeHtml('<em>\'lorem\'</em> & "ipsum"') )
                .toEqual( '&lt;em&gt;&#39;lorem&#39;&lt;/em&gt; &amp; &quot;ipsum&quot;' );
        });

        it('should return empty string if no argument', function () {
            expect( escapeHtml() ).toBe( '' );
        });
    });


});

