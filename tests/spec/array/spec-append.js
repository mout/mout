import append from '../../../array/append';

describe('array/append()', function() {
    it('should append every item of the second array to the end of first array', function() {
        const arr = [1, 2, 3];
        const arr2 = [3, 4, 5];

        const result = append(arr, arr2);
        expect(arr).toBe(result);
        expect(arr).toEqual([1, 2, 3, 3, 4, 5]);
    });

    it('should accept null second array', function() {
        const arr = [1, 2];
        append(arr, null);
        expect(arr).toEqual([1, 2]);
    });

    it('should accept undefined second array', function() {
        const arr = [1];
        append(arr, undefined);
        expect(arr).toEqual([1]);
    });
});
