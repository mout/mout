define(['src/string/camelCase'], function (camelCase) {

    describe('string/camelCase()', function(){

        it('should convert hyphenated text to camelCase', function(){
            var str = 'lorem-ipsum-dolor';
            expect( camelCase(str) ).toEqual('loremIpsumDolor');
        });

        it('should convert spaces to camelCase', function(){
            var str = '  lorem ipsum  dolor  ';
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

    });
});
