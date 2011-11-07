define(['src/string/removeNonASCII'], function (removeNonASCII) {

    describe('string/removeNonASCII()', function(){
        it('should remove non-printable chars', function(){
            var accents = 'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ';
            var printable = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
            var str = accents + printable;

            expect( removeNonASCII( str ) ).toEqual( printable );
        });
    });
});
