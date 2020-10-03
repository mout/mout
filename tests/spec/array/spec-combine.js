import combine from '../../../array/combine';

describe('array/combine()', function() {
    it('should append every item of the second array to the end of first array, ignoring duplicates', function() {
        const arr = [1, 2, 3];
        const arr2 = [3, 4, 5];

        const result = combine(arr, arr2);
        expect(arr).toBe(result);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should allow null second array', function() {
        const arr = [1];
        combine(arr, null);
        expect(arr).toEqual([1]);
    });

    it('should allow undefined second array', function() {
        const arr = [1];
        combine(arr, undefined);
        expect(arr).toEqual([1]);
    });
});
