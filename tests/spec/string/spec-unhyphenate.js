import unhyphenate from '../../../string/unhyphenate';

describe('string/unhyphenate()', function() {
    it('should replace hyphens with spaces if between words', function() {
        const s1 = 'lorem-ipsum-dolor-sit-amet';
        const s2 = 'lorem-ipsum-dolor--sit-amet';
        const s3 = 'lorem-ipsum-dolor---sit-amet';
        const s4 = 'lorem-ipsum-dolor - sit-amet';

        expect(unhyphenate(s1)).toEqual('lorem ipsum dolor sit amet');
        expect(unhyphenate(s2)).toEqual('lorem ipsum dolor--sit amet');
        expect(unhyphenate(s3)).toEqual('lorem ipsum dolor---sit amet');
        expect(unhyphenate(s4)).toEqual('lorem ipsum dolor - sit amet');
    });

    it('should treat null as empty string', function() {
        expect(unhyphenate(null)).toBe('');
    });

    it('should treat undefined as empty string', function() {
        expect(unhyphenate(void 0)).toBe('');
    });
});
