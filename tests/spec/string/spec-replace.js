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

    });

});
