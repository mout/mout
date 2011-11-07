define(['src/string/pascalCase'], function (pascalCase) {

    describe('string/pascalCase()', function(){

        it('should convert hyphenated text to camelCase', function(){
            var str = 'lorem-ipsum-dolor';
            expect( pascalCase(str) ).toEqual('LoremIpsumDolor');
        });

        it('should convert spaces to camelCase', function(){
            var str = '  lorem ipsum  dolor  ';
            expect( pascalCase(str) ).toEqual('LoremIpsumDolor');
        });

        it('should remove non word', function(){
            var str = ' #$  lorem ipsum ^ &:  dolor ++ ';
            expect( pascalCase(str) ).toEqual('LoremIpsumDolor');
        });

        it('should replace accents', function(){
            var str = 'spéçïãl chârs';
            expect( pascalCase(str) ).toEqual('SpecialChars');
        });

        it('should do it all at once', function(){
            var str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
            expect( pascalCase(str) ).toEqual('LoremIpsumDolorSpecialChars');
        });

    });
});
