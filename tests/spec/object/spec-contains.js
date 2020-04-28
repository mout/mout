import contains from '../../../object/contains';

describe('object/contains', function() {
    it('should check for existence', function() {
        const list = { a: 1, b: 2, c: 3 };
        expect(contains(list, 2)).toBe(true);
        expect(contains(list, 4)).toBe(false);
    });
});
