import slugify from '../../../string/slugify';

describe('string/slugify()', function() {
    it("shouldn't split camelCase text", function() {
        const str = 'loremIpsum';
        expect(slugify(str)).toEqual('loremipsum');
    });

    it('should replace spaces with delimeter', function() {
        const str = '  lorem ipsum    dolor';
        expect(slugify(str, '_')).toEqual('lorem_ipsum_dolor');
    });

    it('should use hyphen as delimeter by default', function() {
        const str = 'lorem ipsum dolor';
        expect(slugify(str)).toEqual('lorem-ipsum-dolor');
    });

    it('should remove non-word chars', function() {
        const str = ' %# lorem ipsum  ? $  dolor';
        expect(slugify(str)).toEqual('lorem-ipsum-dolor');
    });

    it('should replace accents', function() {
        const str = 'spéçïãl chârs';
        expect(slugify(str)).toEqual('special-chars');
    });

    it('should convert to lowercase', function() {
        const str = 'LOREM IPSUM';
        expect(slugify(str)).toEqual('lorem-ipsum');
    });

    it('should do it all at once', function() {
        const str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
        expect(slugify(str)).toEqual('lorem-ipsum-dolor-special-chars');
    });

    it('should treat null as empty string', function() {
        expect(slugify(null)).toBe('');
    });

    it('should treat undefined as empty string', function() {
        expect(slugify(void 0)).toBe('');
    });
});
