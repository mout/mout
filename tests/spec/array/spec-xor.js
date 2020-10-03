import xor from '../../../array/xor';

describe('array/xor()', function() {
    it('should keep only items that are present in a single array', function() {
        const a = ['a', 'b', 1];
        const b = ['c', 1];

        expect(xor(a, b)).toEqual(['a', 'b', 'c']);
    });

    it('should remove duplicates', function() {
        const a = ['a', 'b', 1, 'b'];
        const b = ['c', 'a', 1, 'c'];

        expect(xor(a, b)).toEqual(['b', 'c']);
    });

    it('should return an empty array if items are present on both arrays', function() {
        const a = ['a', 'c'];
        const b = ['c', 'a'];

        expect(xor(a, b)).toEqual([]);
    });

    it('should use empty array if array is null/undefined', function() {
        expect(xor(null, [1])).toEqual([1]);
        expect(xor(undefined, [1])).toEqual([1]);
    });
});
