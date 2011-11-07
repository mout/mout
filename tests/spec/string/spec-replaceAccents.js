define(['src/string/replaceAccents'], function (replaceAccents) {

    describe('string/replaceAccents()', function(){

        it('should replace all Basic Latin and Latin-1 accented chars with regular ones', function(){
            var accents = 'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ';
            var regular = 'aAaAaAaAaAaAcCeEeEeEeEiIiIiIiInNoOoOoOOoOoODpuUuUuUuUyYy';
            expect( replaceAccents(accents) ).toEqual( regular );
        });

    });
});
