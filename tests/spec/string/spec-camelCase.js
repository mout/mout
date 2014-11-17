define(['mout/string/camelCase'], function (camelCase) {

    describe('string/camelCase()', function(){

        it('should convert hyphenated text to camelCase', function(){
            var str = 'lorem-ipsum-dolor';
            expect( camelCase(str) ).toEqual('loremIpsumDolor');
        });

        it('should convert spaces to camelCase', function(){
            var str = '  lorem ipsum  dolor  ';
            expect( camelCase(str) ).toEqual('loremIpsumDolor');
        });

        it('should convert underscores to camelCase', function(){
            var str = 'lorem_ipsum_dolor';
            expect( camelCase(str) ).toEqual('loremIpsumDolor');
        });

        it('should remove non word', function(){
            var str = ' #$  lorem ipsum ^ &:  dolor ++ ';
            expect( camelCase(str) ).toEqual('loremIpsumDolor');
        });

        it('should replace accents', function(){
            var str = 'spéçïãl chârs';
            expect( camelCase(str) ).toEqual('specialChars');
        });

        it('should do it all at once', function(){
            var str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
            expect( camelCase(str) ).toEqual('loremIpsumDolorSpecialChars');
        });

        it('should treat null as empty string', function(){
            expect( camelCase(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( camelCase(void 0) ).toBe('');
        });

        it('should work with UPPER_CASE input', function() {
            expect( camelCase('SOME_TEXT') ).toBe('someText');
        });

        it('should preserve camelCase input', function() {
            expect( camelCase('loremIpsum') ).toBe('loremIpsum');
        });

        it('should preserve acronyms if string contains lowercase', function() {
            expect( camelCase('XML HTTP request') ).toBe('xmlHTTPRequest');
            expect( camelCase('XML HTTP Request') ).toBe('xmlHTTPRequest');
            expect( camelCase('XML_HTTP_request') ).toBe('xmlHTTPRequest');
            expect( camelCase('XML_HTTP_Request') ).toBe('xmlHTTPRequest');
            expect( camelCase('XML-HTTP-request') ).toBe('xmlHTTPRequest');
        });

        it('should ignore acronyms if input is all uppercase', function() {
            expect( camelCase('XML HTTP REQUEST') ).toBe('xmlHttpRequest');
            expect( camelCase('XML_HTTP_REQUEST') ).toBe('xmlHttpRequest');
            expect( camelCase('XML-HTTP-REQUEST') ).toBe('xmlHttpRequest');
        });

    });
});
