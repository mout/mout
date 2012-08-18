define(['src/string/underscore'], function(underscore) {
    describe('string/underscore()', function(){

        it('should split camelCase text', function(){
            var str = 'loremIpsum';
            expect( underscore(str) ).toEqual('lorem_ipsum');
        });

        it('should replace spaces with underscores', function(){
            var str = '  lorem ipsum   dolor';
            expect( underscore(str) ).toEqual('lorem_ipsum_dolor');
        });

        it('should remove non-word chars', function(){
            var str = ' %# lorem ipsum  ? $  dolor';
            expect( underscore(str) ).toEqual('lorem_ipsum_dolor');
        });

        it('should replace accents', function(){
            var str = 'spéçïãl chârs';
            expect( underscore(str) ).toEqual('special_chars');
        });

        it('should convert to lowercase', function(){
            var str = 'LOREM IPSUM';
            expect( underscore(str) ).toEqual('lorem_ipsum');
        });

        it('should do it all at once', function(){
            var str = '  %$ & loremIpsum @ dolor spéçïãl  ! chârs  )( )  ';
            expect( underscore(str) ).toEqual('lorem_ipsum_dolor_special_chars');
        });

    });
});

