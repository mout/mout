define(['mout/string/insert'], function(insert){

    describe('string/insert', function(){

        it('should add a substring', function(){
            expect( insert('bcde', 0, 'a') ).toBe('abcde');
            expect( insert('abc', 10, 'd') ).toBe('abcd');
            expect( insert('abc', 3, 'd') ).toBe('abcd');
            expect( insert('abde', 2, 'c') ).toBe('abcde');
            expect( insert('this is a sentence', 10, 'short ') ).toBe('this is a short sentence');
        });

        it('should accept negative indexes', function() {
            expect( insert('abd', -1, 'c') ).toBe('abcd');
            expect( insert('cdef', -10, 'ab') ).toBe('abcdef');
        });

        it('should treat null as empty string', function(){
            expect( insert(null, 0, '') ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( insert(void 0, 0, '') ).toBe('');
        });
    });

});
