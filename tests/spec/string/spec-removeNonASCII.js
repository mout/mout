define(['mout/string/removeNonASCII'], function (removeNonASCII) {

    describe('string/removeNonASCII()', function(){

        it('should remove non-printable chars', function(){
            var accents = 'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ';
            var printable = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
            var str = accents + printable;

            expect( removeNonASCII( str ) ).toEqual( printable );
        });

        it('should treat null as empty string', function(){
            expect( removeNonASCII(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( removeNonASCII(void 0) ).toBe('');
        });

    });

});
