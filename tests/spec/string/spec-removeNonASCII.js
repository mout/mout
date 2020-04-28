import removeNonASCII from '../../../string/removeNonASCII';

describe('string/removeNonASCII()', function() {
    it('should remove non-printable chars', function() {
        const accents = 'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ';
        const printable = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
        const str = accents + printable;

        expect(removeNonASCII(str)).toEqual(printable);
    });

    it('should treat null as empty string', function() {
        expect(removeNonASCII(null)).toBe('');
    });

    it('should treat undefined as empty string', function() {
        expect(removeNonASCII(void 0)).toBe('');
    });
});
