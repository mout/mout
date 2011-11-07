define(['src/string/rtrim'], function (rtrim) {

    describe('string/rtrim()', function(){
        var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';

        it('should remove whitespaces from end of string', function(){
            expect( rtrim(str) ).toEqual('   \t \t \t\t     lorem  ipsum');
        });
    });
});
