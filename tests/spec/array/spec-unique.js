import unique from '../../../array/unique';

describe('array/unique()', function() {
    it('should remove duplicates', function() {
        const source = ['a', 1, 2, 'c', 'b', 2, 1, 'b', 'c'];
        const result = unique(source);

        // should not affect original array
        expect(source.length).toEqual(9);

        // duplicates are removed starting from begining of array!
        expect(result).toEqual(['a', 2, 1, 'b', 'c']);
    });

    it('should return empty array if source array is null/undefined', function() {
        expect(unique(null)).toEqual([]);
        expect(unique(undefined)).toEqual([]);
    });

    it('should support custom compare function', function() {
        const arr = [{ name: 'foo' }, { name: 'bar' }, { name: 'foo' }];
        const result = unique(arr, function(a, b) {
            return a.name === b.name;
        });
        // note that it removes duplicates starting from begin of array
        expect(result).toEqual(arr.slice(1, 3));
    });
});
