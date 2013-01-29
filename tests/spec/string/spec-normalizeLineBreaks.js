define(['mout/string/normalizeLineBreaks'], function (normalizeLineBreaks) {

    describe('string/normalizeLineBreaks()', function () {

        it('should convert line breaks to the same standard.', function () {

            var str = 'foo\nbar\r\nlorem\ripsum';

            expect( /\r\n/.test(str) ).toEqual( true );
            expect( /\r/.test(str) ).toEqual( true );
            expect( /\n/.test(str) ).toEqual( true );

            str = normalizeLineBreaks(str);

            expect( /\r\n/.test(str) ).toEqual( false );
            expect( /\r/.test(str) ).toEqual( false );
            expect( /\n/.test(str) ).toEqual( true );

        });

        it('should allow custom line break.', function () {

            var str = 'foo\nbar\r\nlorem\ripsum';

            expect( /\r\n/.test(str) ).toEqual( true );
            expect( /\r/.test(str) ).toEqual( true );
            expect( /\n/.test(str) ).toEqual( true );

            str = normalizeLineBreaks(str, '\r');

            expect( /\r\n/.test(str) ).toEqual( false );
            expect( /\r/.test(str) ).toEqual( true );
            expect( /\n/.test(str) ).toEqual( false );
            expect( /-/.test(str) ).toEqual( false );

            str = normalizeLineBreaks(str, '-');

            expect( /\r\n/.test(str) ).toEqual( false );
            expect( /\r/.test(str) ).toEqual( false );
            expect( /\n/.test(str) ).toEqual( false );
            expect( /-/.test(str) ).toEqual( true );

        });

        it('should treat null as empty string', function(){
            expect( normalizeLineBreaks(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( normalizeLineBreaks(void 0) ).toBe('');
        });

    });

});

