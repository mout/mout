import replaceAccents from '../../../string/replaceAccents';

describe('string/replaceAccents()', function() {
    it('should replace all Basic Latin and Latin-1 accented chars with regular ones', function() {
        const accents = 'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ';
        const regular = 'aAaAaAaAaAaAcCeEeEeEeEiIiIiIiInNoOoOoOOoOoODpuUuUuUuUyYy';
        expect(replaceAccents(accents)).toEqual(regular);
    });

    it('should treat null as empty string', function() {
        expect(replaceAccents(null)).toEqual('');
    });

    it('should treat undefined as empty string', function() {
        expect(replaceAccents(void 0)).toEqual('');
    });
});
