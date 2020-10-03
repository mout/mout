import remove from '../../../array/remove';

describe('array/remove()', function() {
    it('should work in normal array', function() {
        const arr = [1, 'a', 2, 'b'];

        remove(arr, 'a');
        expect(arr[1]).toBe(2);
        expect(arr.length).toEqual(3);
    });

    it('should work in sparse array', function() {
        const arr = [];
        arr[1] = 1;
        arr[3] = 'a';
        arr[6] = 2;
        arr[8] = 'b';

        remove(arr, 'a');
        expect(arr[3]).toBeUndefined();
        expect(arr.length).toEqual(8);
    });

    it('should not modify the array if the item does not exist', function() {
        const arr = [1, 'a', 2, 'b'];
        remove(arr, 'c');
        expect(arr).toEqual([1, 'a', 2, 'b']);
    });
});
