import intersection from '../../../array/intersection';

describe('array/intersection()', function() {
    it('should keep only items that are present on all arrays', function() {
        const a = ['a', 'b', 1];
        const b = ['c', 1];
        const c = [1, 2, 3];

        expect(intersection(a, b, c)).toEqual([1]);
    });

    it('should remove duplicates', function() {
        const a = ['a', 'b', 1];
        const b = ['c', 'a', 1];
        const c = [1, 'b', 2, 3, 'a'];

        expect(intersection(a, b, c)).toEqual(['a', 1]);
    });

    it('should return an empty array if no intersection', function() {
        const a = ['b'];
        const b = ['c', 'a'];
        const c = [1, 'b', 2, 3, 'a'];

        expect(intersection(a, b, c)).toEqual([]);
    });

    it('should use empty array when null/undefined', function() {
        expect(intersection([1, 2], null, [1])).toEqual([]);
        expect(intersection([1, 2], undefined, [1])).toEqual([]);
    });
});
