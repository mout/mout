define(['mout/string/insert'], function(insert){

    describe('string/insert', function(){

        it('should add a substring', function(){
            expect( insert('bcde', 0, 'a') ).toBe('abcde');
            expect( insert('abc', 10, 'd') ).toBe('abcd');
            expect( insert('abc', 3, 'd') ).toBe('abcd');
            expect( insert('bcd', -1, 'a') ).toBe('abcd');
            expect( insert('abde', 2, 'c') ).toBe('abcde');
            expect( insert('this is a sentence', 10, 'short ') ).toBe('this is a short sentence');
        });

    });

});
