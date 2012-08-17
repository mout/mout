define(['src/string/toSlug'], function (toSlug) {

    describe('string/toSlug()', function(){

        it('shouldn\'t split camelCase text', function(){
            var str = 'loremIpsum';
            expect( toSlug(str) ).toEqual('loremipsum');
        });

        it('should replace spaces with delimeter', function(){
            var str = '  lorem ipsum    dolor';
            expect( toSlug(str, '_') ).toEqual('lorem_ipsum_dolor');
        });

        it('should use hyphen as delimeter by default', function(){
            var str = 'lorem ipsum dolor';
            expect( toSlug(str) ).toEqual('lorem-ipsum-dolor');
        });

        it('should remove non-word chars', function(){
            var str = ' %# lorem ipsum  ? $  dolor';
            expect( toSlug(str) ).toEqual('lorem-ipsum-dolor');
        });

        it('should replace accents', function(){
            var str = 'spéçïãl chârs';
            expect( toSlug(str) ).toEqual('special-chars');
        });

        it('should convert to lowercase', function(){
            var str = 'LOREM IPSUM';
            expect( toSlug(str) ).toEqual('lorem-ipsum');
        });

        it('should do it all at once', function(){
            var str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
            expect( toSlug(str) ).toEqual('lorem-ipsum-dolor-special-chars');
        });

    });
});
