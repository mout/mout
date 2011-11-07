define(['src/string/trim'], function (trim) {

    describe('string/trim()', function(){
        var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';

        it('should remove whitespaces from begin and end of string', function(){
            expect( trim(str) ).toEqual('lorem  ipsum');
        });
    });
});
