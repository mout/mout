import union from '../../../array/union';

describe('array/union()', function() {
    it('should concat arrays', function() {
        const a = ['a', 'b'];
        const b = ['c'];
        const c = [1, 2, 3];

        expect(union(a, b, c)).toEqual(['a', 'b', 'c', 1, 2, 3]);
    });

    it('should remove duplicates', function() {
        const a = ['a', 'b'];
        const b = ['c', 'a'];
        const c = [1, 'b', 2, 3, 'a'];

        // note that unique remove from begin to end
        expect(union(a, b, c)).toEqual(['c', 1, 'b', 2, 3, 'a']);
    });

    it('should use empty array for null/undefined arguments', function() {
        expect(union([1], null, undefined, [2, 3])).toEqual([1, 2, 3]);
    });
});
