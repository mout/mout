define(['mout/string/rtrim'], function (rtrim) {

    describe('string/rtrim()', function(){

        it('should remove whitespaces from end of string', function(){
            var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';
            expect( rtrim(str) ).toEqual('   \t \t \t\t     lorem  ipsum');
        });

        it('should remove specified chars from end of string', function(){
            var str = '-+-*test*-+-';
            var chars = ['-', '+', '*'];
            expect( rtrim(str, chars) ).toEqual('-+-*test');
        });

    });
});
