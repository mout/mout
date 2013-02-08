define(['mout/string/replace'], function(replace){

    describe('string/replace', function(){

        it('should replace single string', function(){
            var result = replace('test foo', 'foo', 'result');
            expect(result).toEqual('test result');
        });

        it('should replace multiple searches with single string', function(){
            var result = replace('test one two', ['one', 'two'], 'n');
            expect(result).toEqual('test n n');
        });

        it('should replace multiple searches with multiple strings', function(){
            var result = replace('test one two', ['one', 'two'], ['1', '2']);
            expect(result).toEqual('test 1 2');
        });

        it('should replace with regexp', function(){
            var result = replace('test 1 2', /\d+/g, 'n');
            expect(result).toEqual('test n n');
        });

        it('should replace with function replacer', function(){
            function replaceNum(m) {
                return (+m) * (+m);
            }
            function replaceLetter(m) {
                return m.charCodeAt(0);
            }

            var result = replace('1 2 3 a', [/\d+/g, /[a-z]/g],
                                 [replaceNum, replaceLetter]);

            expect(result).toEqual('1 4 9 97');
        });

        it('should treat null as empty string', function(){
            expect( replace(null, 'a', 'b') ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( replace(void 0, 'a', 'b') ).toBe('');
        });

    });

});
