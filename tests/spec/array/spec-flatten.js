import flatten from '../../../array/flatten';

describe('array/flatten()', function() {
    it('should recursively flatten the array', function() {
        const arr = [1, [2], [3, [4], 5]];

        const result = flatten(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should only flatten one layer if level is 1', function() {
        const arr = [1, [2], [3, [4, 5]]];

        const result = flatten(arr, 1);
        expect(result).toEqual([1, 2, 3, [4, 5]]);
    });

    it('should only flatten 2 layers if level is 2', function() {
        const arr = [1, [2], [3, [4, [5, 6]]]];

        const result = flatten(arr, 2);
        expect(result).toEqual([1, 2, 3, 4, [5, 6]]);
    });

    it('should not mess with objects within arrays', function() {
        const arr = [1, { a: [2, [3]] }];

        const result = flatten(arr);
        expect(result).toEqual([1, { a: [2, [3]] }]);
    });

    it('should return empty array when source array is null/undefined', function() {
        expect(flatten(null)).toEqual([]);
        expect(flatten(undefined)).toEqual([]);
    });
});
