import shuffle from '../../../array/shuffle';
import mockRandom from '../random/helper-mockRandom';

describe('array/shuffle()', function() {
    beforeEach(function() {
        mockRandom.start();
    });

    afterEach(function() {
        mockRandom.end();
    });

    it('should return new array with shuffled items', function() {
        const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        const arr2 = arr.slice();
        const result = shuffle(arr);

        expect(result).not.toBe(arr);
        expect(result).not.toEqual(arr2);
    });

    it('should return empty array if source array is null/undefined', function() {
        expect(shuffle(null)).toEqual([]);
        expect(shuffle(undefined)).toEqual([]);
    });
});
