import pascalCase from '../../../string/pascalCase';

describe('string/pascalCase()', function() {
    it('should convert hyphenated text to camelCase', function() {
        const str = 'lorem-ipsum-dolor';
        expect(pascalCase(str)).toEqual('LoremIpsumDolor');
    });

    it('should convert spaces to camelCase', function() {
        const str = '  lorem ipsum  dolor  ';
        expect(pascalCase(str)).toEqual('LoremIpsumDolor');
    });

    it('should remove non word', function() {
        const str = ' #$  lorem ipsum ^ &:  dolor ++ ';
        expect(pascalCase(str)).toEqual('LoremIpsumDolor');
    });

    it('should replace accents', function() {
        const str = 'spéçïãl chârs';
        expect(pascalCase(str)).toEqual('SpecialChars');
    });

    it('should do it all at once', function() {
        const str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
        expect(pascalCase(str)).toEqual('LoremIpsumDolorSpecialChars');
    });

    it('should treat null as empty string', function() {
        expect(pascalCase(null)).toBe('');
    });

    it('should treat undefined as empty string', function() {
        expect(pascalCase(void 0)).toBe('');
    });
});
