define(['src/string/ltrim'], function (ltrim) {

    describe('string/ltrim()', function(){
        var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';

        it('should remove whitespaces from begin of string', function(){
            expect( ltrim(str) ).toEqual('lorem  ipsum    \t \t  \t\t  ');
        });
    });
});
