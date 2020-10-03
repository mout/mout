import hyphenate from '../../../string/hyphenate';

describe('string/hyphenate()', function() {
    it('should split camelCase text', function() {
        const str = 'loremIpsum';
        expect(hyphenate(str)).toEqual('lorem-ipsum');
    });

    it('should replace spaces with hyphens', function() {
        const str = '  lorem ipsum    dolor';
        expect(hyphenate(str)).toEqual('lorem-ipsum-dolor');
    });

    it('should remove non-word chars', function() {
        const str = ' %# lorem ipsum  ? $  dolor';
        expect(hyphenate(str)).toEqual('lorem-ipsum-dolor');
    });

    it('should replace accents', function() {
        const str = 'spéçïãl chârs';
        expect(hyphenate(str)).toEqual('special-chars');
    });

    it('should convert to lowercase', function() {
        const str = 'LOREM IPSUM';
        expect(hyphenate(str)).toEqual('lorem-ipsum');
    });

    it('should do it all at once', function() {
        const str = '  %$ & loremIpsum @ dolor spéçïãl  ! chârs  )( )  ';
        expect(hyphenate(str)).toEqual('lorem-ipsum-dolor-special-chars');
    });

    it('should treat null as empty string', function() {
        expect(hyphenate(null)).toBe('');
    });

    it('should treat undefined as empty string', function() {
        expect(hyphenate(void 0)).toBe('');
    });
});
