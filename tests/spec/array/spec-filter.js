import filter from '../../../array/filter';

describe('array/filter()', function() {
    it('should filter items', function() {
        const items = [1, 2, 3, 4, 5];
        const result = filter(items, function(val, i, arr) {
            return val % 2 !== 0;
        });

        expect(items.length).toEqual(5); // make sure it doesn't replace original array
        expect(result).toEqual([1, 3, 5]);
    });

    it('should loop all array items, even if sparse. see #64', function() {
        const items = new Array(6);
        items[2] = 3;
        items[5] = 8;
        let count = 0;

        const result = filter(items, function(val, i, arr) {
            expect(arr).toBe(items);
            expect(val).toBe(items[i]);
            count += 1;
            return val % 2 === 0;
        });

        expect(result).toEqual([8]);
        // IMPORTANT
        // ---------
        // this behavior is different than ES5 Array#filter
        expect(count).toEqual(6);
    });

    it('should return empty array if no items match', function() {
        const items = [1, 2, 3, 4, 5];
        const result = filter(items, function(val, i, arr) {
            return false;
        });

        expect(result).toEqual([]);
    });

    it('should return empty array if target is null/undefined', function() {
        const testFunc = function() {
            return true;
        };

        expect(filter(undefined, testFunc)).toEqual([]);
        expect(filter(null, testFunc)).toEqual([]);
    });

    it('should allow shorthand object syntax', function() {
        const arr = [
            { a: 1, b: 1 },
            { a: 2, b: 1 },
            { a: 1, b: 1, c: 3 }
        ];
        expect(filter(arr, { a: 1 })).toEqual([arr[0], arr[2]]);
        expect(filter(arr, { b: 1 })).toEqual([arr[0], arr[1], arr[2]]);
        expect(filter(arr, { a: 1, b: 1 })).toEqual([arr[0], arr[2]]);
    });

    it('should allow shorthand string syntax', function() {
        const arr = [
            { a: 1, b: 1 },
            { a: 2, b: 1 },
            { a: 1, b: 1, c: 3 }
        ];
        expect(filter(arr, 'a')).toEqual([arr[0], arr[1], arr[2]]);
        expect(filter(arr, 'c')).toEqual([arr[2]]);
        expect(filter(arr, 'd')).toEqual([]);
    });
});
