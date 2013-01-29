define(['mout/string/trim'], function (trim) {

    describe('string/trim()', function(){

        it('should remove whitespaces from begin and end of string', function(){
            var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';
            expect( trim(str) ).toEqual('lorem  ipsum');
        });

        it('should remove specified chars from begin and end of string', function(){
            var str = '-+-*test*-+-';
            var chars = ['-', '+', '*'];
            expect( trim(str, chars) ).toEqual('test');
        });

    });
});
